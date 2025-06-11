import {
  type FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  BezierCurveEditorContext,
  type BezierCurveEditorContextType,
  type BezierState,
} from "src/components/blog/BezierCurveEditorContext.tsx";

const GRID_OFFSET_X = 3;
const GRID_OFFSET_Y = 3;
const GRID_SIZE = 10;

const OFFSET_Y = GRID_SIZE * GRID_OFFSET_Y;
const OFFSET_X = GRID_SIZE * GRID_OFFSET_X;

const font = '"JetBrains Mono", monospace';

const createBezierLookup = (
  x0: number,
  y0: number,
  cx: number,
  cy: number,
  x1: number,
  y1: number,
  resolution = 256 // number of steps (higher = smoother)
) => {
  const bezier = (t: number, p0: number, p1: number, p2: number) =>
    (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;

  const table: { x: number; y: number }[] = [];

  // Sample the curve at evenly spaced t values
  for (let i = 0; i <= resolution; i++) {
    const t = i / resolution;
    const x = bezier(t, x0, cx, x1);
    const y = bezier(t, y0, cy, y1);
    table.push({ x, y });
  }

  // Return a fast lookup function
  return (x: number) => {
    // Simple linear scan (or binary search if needed)
    for (let i = 0; i < table.length - 1; i++) {
      const a = table[i];
      const b = table[i + 1];
      if (x >= a.x && x <= b.x) {
        // Linear interpolation for better precision, assumes the curve doesn't go back on itself in the x-axis
        const t = (x - a.x) / (b.x - a.x);
        return a.y + t * (b.y - a.y);
      }
    }

    // Clamp to start/end
    return x < table[0].x ? table[0].y : table[table.length - 1].y;
  };
};

const defaultCanvasState: BezierState = {
  start: { x: 0, y: 0 },
  end: { x: 450, y: 50 },
  controlPoints: [
    { x: 150, y: 450 },
    { x: 350, y: 50 },
  ],
};

interface BezierCurveEditorProps {
  id: string;
  /** the number on the x-axis where the value should be equal to 100%, x values should be displayed as percentages if this is defiend */
  xPercentage?: number;
  xLabel?: string;
  yLabel?: string;
  initialState?: BezierState;
}

const BezierCurveEditor: FunctionComponent<BezierCurveEditorProps> = ({
  id,
  xLabel = "X",
  yLabel = "Y",
  initialState = defaultCanvasState,
  xPercentage,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useContext(
    BezierCurveEditorContext
  ) as BezierCurveEditorContextType | null;

  const isUsingContext = !!context;
  const [localState, setLocalState] = useState<BezierState>(initialState);
  const [dragging, setDragging] = useState<null | number>(null);

  // On mount: if using context, register
  useEffect(() => {
    if (isUsingContext) {
      context.registerCanvas(id, initialState);
    } else {
      console.warn(
        `BezierCurveEditor "${id}" is not within a BezierCurveEditorProvider. Falling back to local state.`
      );
    }
  }, [id]);

  // State getter/setter based on context fallback
  const state = isUsingContext ? context.canvases[id] : localState;
  const updateState = (updater: (prev: BezierState) => BezierState) => {
    if (isUsingContext) {
      context.setCanvasState(id, updater);
    } else {
      setLocalState(prev => updater({ ...prev }));
    }
  };

  if (!state) return null;

  const { start, end, controlPoints } = state;
  const draggablePoints = [start, ...controlPoints, end];

  // Drawing
  useEffect(() => {
    const formatX = (x: number) =>
      xPercentage ? `${(x * 100) / xPercentage}%` : x;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // Reset

    // Grid
    for (let x = 0; x <= innerWidth; x += GRID_SIZE) {
      ctx.strokeStyle =
        x === OFFSET_X ? "rgba(40, 39, 40, 1)" : "rgba(200,200,200,0.3)";
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, innerHeight);
      ctx.stroke();
    }
    for (let y = 0; y <= innerHeight; y += GRID_SIZE) {
      ctx.strokeStyle =
        y === OFFSET_Y ? "rgba(40, 39, 40, 1)" : "rgba(200,200,200,0.3)";
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(innerWidth, y);
      ctx.stroke();
    }

    // Guides
    ctx.strokeStyle = "#999";
    ctx.beginPath();
    ctx.moveTo(start.x + OFFSET_X, start.y + OFFSET_Y);
    ctx.lineTo(controlPoints[0].x + OFFSET_X, controlPoints[0].y + OFFSET_Y);
    ctx.lineTo(controlPoints[1].x + OFFSET_X, controlPoints[1].y + OFFSET_Y);
    ctx.lineTo(end.x + OFFSET_X, end.y + OFFSET_Y);
    ctx.stroke();

    // Curve
    ctx.strokeStyle = "rgba(242, 68, 44,1)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(start.x + OFFSET_X, start.y + OFFSET_Y);
    ctx.bezierCurveTo(
      controlPoints[0].x + OFFSET_X,
      controlPoints[0].y + OFFSET_Y,
      controlPoints[1].x + OFFSET_X,
      controlPoints[1].y + OFFSET_Y,
      end.x + OFFSET_X,
      end.y + OFFSET_Y
    );

    ctx.stroke();

    // Points
    const allPoints = [
      ...[start, end].map(p => ({ point: p, color: "rgba(242, 68, 44,1)" })),
      ...controlPoints.map(p => ({ point: p, color: "#555555" })),
    ];

    allPoints.forEach(({ point: p, color }) => {
      ctx.beginPath();
      ctx.arc(p.x + OFFSET_X, p.y + OFFSET_Y, 6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      // Text label
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.font = `12px ${font}`;
      ctx.fillText(
        `(${formatX(p.x)}, ${p.y})`,
        p.x + OFFSET_X + 10,
        canvas.height - (p.y + OFFSET_Y) - 10
      );
      ctx.setTransform(1, 0, 0, -1, 0, canvas.height); // Flip back
    });

    // Reset transform for labels
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#444";
    ctx.font = `14px ${font}`;

    // Y-axis label
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();

    // X-axis label
    ctx.textAlign = "center";
    ctx.fillText(xLabel, canvas.width / 2, canvas.height - 5);
  }, [state]);

  function getMousePos({ clientY, clientX }: MouseEvent) {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      x: clientX - rect.left - OFFSET_X,
      y: canvasRef.current!.height - (clientY - rect.top) - OFFSET_Y,
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
      updateState(prev => {
        const points = [prev.start, ...prev.controlPoints, prev.end].map(p => ({
          ...p,
        }));
        points[dragging] = clamped;
        return {
          start: points[0],
          controlPoints: [points[1], points[2]],
          end: points[3],
        };
      });
    };

    const handleUp = () => setDragging(null);

    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseup", handleUp);
    canvas.addEventListener("mouseleave", handleUp);
    return () => {
      canvas.removeEventListener("mousedown", handleDown);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseup", handleUp);
      canvas.removeEventListener("mouseleave", handleUp);
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

export default BezierCurveEditor;
