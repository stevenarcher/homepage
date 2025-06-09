import {
  type FunctionComponent,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import {
  BezierCanvasContext,
  type BezierState,
  type BezierCanvasContextType,
} from './BezierCanvasContext';

const GRID_SIZE = 10;
const font = '"JetBrains Mono", monospace';

const defaultCanvasState: BezierState = {
  start: { x: 0, y: 0 },
  end: { x: 450, y: 50 },
  controlPoints: [
    { x: 150, y: 450 },
    { x: 350, y: 50 },
  ],
};

interface BezierCanvasProps {
  id: string;
  xLabel?: string;
  yLabel?: string;
}

const BezierCanvas: FunctionComponent<BezierCanvasProps> = ({
  id,
  xLabel = 'X',
  yLabel = 'Y',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useContext(
    BezierCanvasContext
  ) as BezierCanvasContextType | null;

  const isUsingContext = !!context;
  const [localState, setLocalState] = useState<BezierState>(defaultCanvasState);
  const [dragging, setDragging] = useState<null | number>(null);

  // On mount: if using context, register
  useEffect(() => {
    if (isUsingContext) {
      context.registerCanvas(id, defaultCanvasState);
    } else {
      console.warn(
        `BezierCanvas "${id}" is not within a BezierCanvasProvider. Falling back to local state.`
      );
    }
  }, [id]);

  // State getter/setter based on context fallback
  const state = isUsingContext ? context.canvases[id] : localState;
  const updateState = (updater: (prev: BezierState) => BezierState) => {
    if (isUsingContext) {
      context.setCanvasState(id, updater);
    } else {
      setLocalState((prev) => updater({ ...prev }));
    }
  };

  if (!state) return null;

  const { start, end, controlPoints } = state;
  const draggablePoints = [start, ...controlPoints, end];

  // Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // Reset

    // Grid
    ctx.strokeStyle = 'rgba(200,200,200,0.3)';
    for (let x = 0; x <= innerWidth; x += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, innerHeight);
      ctx.stroke();
    }
    for (let y = 0; y <= innerHeight; y += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(innerWidth, y);
      ctx.stroke();
    }

    // Guides
    ctx.strokeStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(controlPoints[0].x, controlPoints[0].y);
    ctx.lineTo(controlPoints[1].x, controlPoints[1].y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    // Curve
    ctx.strokeStyle = 'rgba(242, 68, 44,1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.bezierCurveTo(
      controlPoints[0].x,
      controlPoints[0].y,
      controlPoints[1].x,
      controlPoints[1].y,
      end.x,
      end.y
    );
    ctx.stroke();

    // Points
    [start, end].forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(242, 68, 44,1)';
      ctx.fill();

      // Text label
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.font = `12px ${font}`;
      ctx.fillText(`(${p.x}, ${p.y})`, p.x + 10, canvas.height - p.y - 10);
      ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // Flip back
    });

    controlPoints.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#555555';
      ctx.fill();

      // Text label
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.font = `12px ${font}`;
      ctx.fillText(`(${p.x}, ${p.y})`, p.x + 10, canvas.height - p.y - 10);
      ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // Flip back
    });

    // Reset transform for labels
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#444';
    ctx.font = `14px ${font}`;

    // Y-axis label
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();

    // X-axis label
    ctx.textAlign = 'center';
    ctx.fillText(xLabel, canvas.width / 2, canvas.height - 5);
  }, [state]);

  function getMousePos({ clientY, clientX }: MouseEvent) {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: canvasRef.current!.height - (clientY - rect.top),
    };
  }

  function snap(val: number) {
    return Math.round(val / GRID_SIZE) * GRID_SIZE;
  }

  // Mouse events
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleDown = (e: MouseEvent) => {
      const pos = getMousePos(e);
      draggablePoints.forEach((p, i) => {
        const dx = pos.x - p.x;
        const dy = pos.y - p.y;
        if (Math.sqrt(dx * dx + dy * dy) < 10) {
          setDragging(i);
        }
      });
    };

    const handleMove = (e: MouseEvent) => {
      if (dragging === null) return;
      const pos = getMousePos(e);
      const clamped = {
        x: snap(Math.max(0, Math.min(canvas!.width, pos.x))),
        y: snap(Math.max(0, Math.min(canvas!.height, pos.y))),
      };
      updateState((prev) => {
        const points = [prev.start, ...prev.controlPoints, prev.end].map(
          (p) => ({
            ...p,
          })
        );
        points[dragging] = clamped;
        return {
          start: points[0],
          controlPoints: [points[1], points[2]],
          end: points[3],
        };
      });
    };

    const handleUp = () => setDragging(null);

    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseup', handleUp);
    canvas.addEventListener('mouseleave', handleUp);
    return () => {
      canvas.removeEventListener('mousedown', handleDown);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseup', handleUp);
      canvas.removeEventListener('mouseleave', handleUp);
    };
  }, [dragging, id]);

  return (
    <canvas
      ref={canvasRef}
      className="bezier-canvas"
      width={736}
      height={500}
    />
  );
};

export default BezierCanvas;
