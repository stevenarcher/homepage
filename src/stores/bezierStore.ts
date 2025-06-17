import { map } from 'nanostores';

export interface Point {
  x: number;
  y: number;
}

export interface BezierState {
  start: Point;
  end: Point;
  controlPoints: [Point, Point];
}

export const bezierCurves = map<Record<string, BezierState>>({});

// Register a new curve (if it doesn't already exist)
export function registerCurve(id: string, initialState: BezierState) {
  const current = bezierCurves.get();
  if (!current[id]) {
    bezierCurves.set({ ...current, [id]: initialState });
  }
}

// Update curve by ID
export const setCurveState = (
  id: string,
  updater: (prev: BezierState) => BezierState
) => {
  const current = bezierCurves.get();
  if (!current[id]) return;
  bezierCurves.set({
    ...current,
    [id]: updater(current[id]),
  });
};
