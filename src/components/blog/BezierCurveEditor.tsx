import { type FunctionComponent, useEffect, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import {
  bezierCurves,
  registerCurve,
  setCurveState,
  type BezierState,
} from '@/stores/bezierStore';

const GRID_SIZE = 10;
const GRID_SCALE = 4.5;

const GRID_OFFSET_X = 3;
const GRID_OFFSET_Y = 3;
const OFFSET_X = GRID_SIZE * GRID_OFFSET_X;
const OFFSET_Y = GRID_SIZE * GRID_OFFSET_Y;

const xFormat = (x: number) => x * GRID_SCALE + OFFSET_X;
const yFormat = (y: number) => y * GRID_SCALE + OFFSET_Y;

const WIDTH = 736;
const HEIGHT = 500;
const font = '"JetBrains Mono", monospace';

const defaultCanvasState: BezierState = {
  start: { x: 0, y: 0 },
  end: { x: 20, y: 50 },
  controlPoints: [
    { x: 33, y: 20 },
    { x: 77, y: 50 },
  ],
};

interface BezierCurveEditorProps {
  id: string;
  xPercentage?: number;
  xLabel?: string;
  yLabel?: string;
  initialState?: BezierState;
}

const BezierCurveEditor: FunctionComponent<BezierCurveEditorProps> = ({
  id,
  xLabel = 'X',
  yLabel = 'Y',
  initialState = defaultCanvasState,
  xPercentage,
  ...rest
}) => {
  const curves = useStore(bezierCurves);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const state = curves[id] || initialState;
  const { start, end, controlPoints } = state;

  const formatX = (x: number) =>
    xPercentage ? `${Math.round((x * 100) / xPercentage)}%` : x;

  const snap = (val: number) => Math.round(val);

  const handlePointerDown =
    (index: number) => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setDraggingIndex(index);
    };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (draggingIndex === null || !svgRef.current) return;

    const point = svgRef.current.createSVGPoint();

    if ('touches' in e && e.touches.length > 0) {
      point.x = e.touches[0].clientX;
      point.y = e.touches[0].clientY;
    } else if ('clientX' in e) {
      point.x = e.clientX;
      point.y = e.clientY;
    } else return;

    const svgPoint = point.matrixTransform(
      svgRef.current.getScreenCTM()?.inverse()
    );

    const x = snap((svgPoint.x - OFFSET_X) / GRID_SCALE);
    const y = snap((HEIGHT - svgPoint.y - OFFSET_Y) / GRID_SCALE); // flipped Y

    setCurveState(id, (prev) => {
      const points = [prev.start, prev.end, ...prev.controlPoints];
      points[draggingIndex] = { x, y };
      return {
        start: points[0],
        end: points[1],
        controlPoints: [points[2], points[3]],
      };
    });
  };

  const handleUp = () => {
    setDraggingIndex(null);
  };

  useEffect(() => {
    registerCurve(id, initialState);
  }, [id]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleUp);
    window.addEventListener('touchcancel', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('touchcancel', handleUp);
    };
  }, [draggingIndex]);

  const makeGridLines = () => {
    const lines = [];
    for (let x = 0; x <= WIDTH; x += GRID_SIZE) {
      lines.push(
        <line
          key={`v-${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={HEIGHT}
          stroke={
            x === OFFSET_X ? 'var(--foreground)' : 'rgba(200,200,200,0.3)'
          }
        />
      );
    }
    for (let y = 0; y <= HEIGHT; y += GRID_SIZE) {
      lines.push(
        <line
          key={`h-${y}`}
          x1={0}
          y1={y}
          x2={WIDTH}
          y2={y}
          stroke={
            y === OFFSET_Y ? 'var(--foreground)' : 'rgba(200,200,200,0.3)'
          }
        />
      );
    }
    return lines;
  };

  return (
    <svg
      ref={svgRef}
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="bezier-canvas w-full max-w-full h-auto mb-4"
      style={{ touchAction: 'none', aspectRatio: '736 / 500' }}
    >
      <g transform={`scale(1, -1) translate(0, -${HEIGHT})`}>
        {makeGridLines()}

        <polyline
          points={[
            [xFormat(start.x), yFormat(start.y)],
            [xFormat(controlPoints[0].x), yFormat(controlPoints[0].y)],
            [xFormat(controlPoints[1].x), yFormat(controlPoints[1].y)],
            [xFormat(end.x), yFormat(end.y)],
          ]
            .map((p) => p.join(','))
            .join(' ')}
          fill="none"
          stroke="#999"
        />

        <path
          d={`
            M ${xFormat(start.x)} ${yFormat(start.y)}
            C ${xFormat(controlPoints[0].x)} ${yFormat(controlPoints[0].y)},
              ${xFormat(controlPoints[1].x)} ${yFormat(controlPoints[1].y)},
              ${xFormat(end.x)} ${yFormat(end.y)}
          `}
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
        />

        {[start, end, ...controlPoints].map((p, i) => (
          <circle
            key={i}
            cx={xFormat(p.x)}
            cy={yFormat(p.y)}
            r={6}
            fill={i < 2 ? 'var(--accent)' : 'var(--mutted)'}
            onMouseDown={handlePointerDown(i)}
            onTouchStart={handlePointerDown(i)}
            cursor="pointer"
          />
        ))}
      </g>

      {[start, end, ...controlPoints].map((p, i) => (
        <text
          key={`label-${i}`}
          x={xFormat(p.x) + 10}
          y={HEIGHT - yFormat(p.y) - 10}
          fontFamily={font}
          fontSize="12"
          fill="var(--foreground)"
        >
          ({formatX(p.x)}%, {p.y}%)
        </text>
      ))}

      <text
        x={WIDTH / 2}
        y={HEIGHT - 5}
        fontFamily={font}
        fontSize="14"
        fill="var(--foreground)"
        textAnchor="middle"
      >
        {xLabel}
      </text>
      <text
        transform={`translate(15, ${HEIGHT / 2}) rotate(-90)`}
        fontFamily={font}
        fontSize="14"
        fill="var(--foreground)"
        textAnchor="middle"
      >
        {yLabel}
      </text>
    </svg>
  );
};

export default BezierCurveEditor;
