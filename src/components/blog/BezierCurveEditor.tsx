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

const WIDTH = 736;
const HEIGHT = 500;

const font = '"JetBrains Mono", monospace';

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
  const svgRef = useRef<SVGSVGElement>(null);
  const context = useContext(
    BezierCurveEditorContext
  ) as BezierCurveEditorContextType | null;

  const isUsingContext = !!context;
  const [localState, setLocalState] = useState<BezierState>(initialState);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isUsingContext) {
      context.registerCanvas(id, initialState);
    }
  }, [id]);

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
  const allPoints = [start, end, ...controlPoints];

  const formatX = (x: number) =>
    xPercentage ? `${Math.round((x * 100) / xPercentage)}%` : x;

  const snap = (val: number) => Math.round(val / GRID_SIZE) * GRID_SIZE;

  const handlePointerDown = (index: number) => (
    e: React.MouseEvent | React.TouchEvent
  ) => {
    e.preventDefault();
    setDraggingIndex(index);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (draggingIndex === null || !svgRef.current) return;

    const point = svgRef.current.createSVGPoint();

    if ("touches" in e && e.touches.length > 0) {
      point.x = e.touches[0].clientX;
      point.y = e.touches[0].clientY;
    } else if ("clientX" in e) {
      point.x = e.clientX;
      point.y = e.clientY;
    } else {
      return;
    }

    const svgPoint = point.matrixTransform(
      svgRef.current.getScreenCTM()?.inverse()
    );

    const x = snap(svgPoint.x - OFFSET_X);
    const y = snap(HEIGHT - svgPoint.y - OFFSET_Y); // account for flipped Y

    updateState(prev => {
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
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);
    window.addEventListener("touchcancel", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
      window.removeEventListener("touchcancel", handleUp);
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
          stroke={x === OFFSET_X ? "var(--foreground)" : "rgba(200,200,200,0.3)"}
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
          stroke={y === OFFSET_Y ? "var(--foreground)" : "rgba(200,200,200,0.3)"}
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
      className="bezier-canvas w-full max-w-full h-auto"
      style={{ border: "1px solid #ccc", touchAction: "none", aspectRatio: "736 / 500"  }}
    >
      {/* Flip the coordinate system */}
      <g transform={`scale(1, -1) translate(0, -${HEIGHT})`}>
        {/* Grid */}
        {makeGridLines()}

        {/* Guides */}
        <polyline
          points={[
            [start.x + OFFSET_X, start.y + OFFSET_Y],
            [controlPoints[0].x + OFFSET_X, controlPoints[0].y + OFFSET_Y],
            [controlPoints[1].x + OFFSET_X, controlPoints[1].y + OFFSET_Y],
            [end.x + OFFSET_X, end.y + OFFSET_Y],
          ]
            .map(p => p.join(","))
            .join(" ")}
          fill="none"
          stroke="#999"
        />

        {/* Curve */}
        <path
          d={`
            M ${start.x + OFFSET_X} ${start.y + OFFSET_Y}
            C ${controlPoints[0].x + OFFSET_X} ${controlPoints[0].y + OFFSET_Y},
              ${controlPoints[1].x + OFFSET_X} ${controlPoints[1].y + OFFSET_Y},
              ${end.x + OFFSET_X} ${end.y + OFFSET_Y}
          `}
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
        />

        {/* Draggable Points */}
        {[start, end, ...controlPoints].map((p, i) => (
          <circle
            key={i}
            cx={p.x + OFFSET_X}
            cy={p.y + OFFSET_Y}
            r={6}
            fill={i < 2 ? "var(--accent)" : "var(--mutted)"}
            onMouseDown={handlePointerDown(i)}
            onTouchStart={handlePointerDown(i)}
            cursor="pointer"
          />
        ))}
      </g>

      {/* Labels */}
      {[start, end, ...controlPoints].map((p, i) => (
        <text
          key={`label-${i}`}
          x={p.x + OFFSET_X + 10}
          y={HEIGHT - (p.y + OFFSET_Y) - 10}
          fontFamily={font}
          fontSize="12"
          fill="var(--foreground)"
        >
          ({formatX(p.x)}, {p.y})
        </text>
      ))}

      {/* Axis labels */}
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
