type Point = { x: number; y: number };
type LookupEntry = { x: number; y: number };

/**
 * Generate a lookup table of x-y pairs from a cubic Bézier curve.
 */
export function generateBezierLookupTable(
  P0: Point,
  P1: Point,
  P2: Point,
  P3: Point,
  steps = 1000
): LookupEntry[] {
  function bezier(
    t: number,
    p0: number,
    p1: number,
    p2: number,
    p3: number
  ): number {
    const mt = 1 - t;
    return (
      mt ** 3 * p0 + 3 * mt ** 2 * t * p1 + 3 * mt * t ** 2 * p2 + t ** 3 * p3
    );
  }

  const table: LookupEntry[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = bezier(t, P0.x, P1.x, P2.x, P3.x);
    const y = bezier(t, P0.y, P1.y, P2.y, P3.y);
    table.push({ x, y });
  }

  // Optionally sort by x (should be monotonic if control points ensure that)
  return table.sort((a, b) => a.x - b.x);
}

/**
 * Estimate y for a given x using a precomputed lookup table.
 */
export function cubicBezierYWithLUT(
  xTarget: number,
  lut: LookupEntry[]
): number {
  if (!lut.length) return 0;

  // Binary search to find closest x values around xTarget
  let low = 0;
  let high = lut.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midX = lut[mid].x;

    if (Math.abs(midX - xTarget) < 1e-6) {
      return lut[mid].y;
    } else if (midX < xTarget) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // Interpolate between high and low
  const i1 = Math.max(0, Math.min(lut.length - 1, low));
  const i0 = Math.max(0, i1 - 1);

  const x0 = lut[i0].x,
    y0 = lut[i0].y;
  const x1 = lut[i1].x,
    y1 = lut[i1].y;

  if (x1 === x0) return y0; // Avoid division by zero

  const alpha = (xTarget - x0) / (x1 - x0);
  return y0 + alpha * (y1 - y0);
}

export function cubicBezierY(
  P0: Point,
  P1: Point,
  P2: Point,
  P3: Point,
  epsilon = 1e-6,
  maxIterations = 20
): number | null {
  const xTarget = Math.random();

  // Cubic Bézier function for x and y
  function bezier(
    t: number,
    p0: number,
    p1: number,
    p2: number,
    p3: number
  ): number {
    const mt = 1 - t;
    return (
      mt * mt * mt * p0 +
      3 * mt * mt * t * p1 +
      3 * mt * t * t * p2 +
      t * t * t * p3
    );
  }

  // Derivative of the cubic Bézier function for x (used in Newton-Raphson)
  function bezierDerivative(
    t: number,
    p0: number,
    p1: number,
    p2: number,
    p3: number
  ): number {
    const mt = 1 - t;
    return (
      3 * mt * mt * (p1 - p0) + 6 * mt * t * (p2 - p1) + 3 * t * t * (p3 - p2)
    );
  }

  // Initial guess for t
  let t = 0.5;

  for (let i = 0; i < maxIterations; i++) {
    const x = bezier(t, P0.x, P1.x, P2.x, P3.x);
    const dx = bezierDerivative(t, P0.x, P1.x, P2.x, P3.x);

    if (Math.abs(x - xTarget) < epsilon) {
      return bezier(t, P0.y, P1.y, P2.y, P3.y);
    }

    if (dx === 0) break; // Avoid division by zero

    t = t - (x - xTarget) / dx;

    // Clamp t to [0,1]
    if (t < 0) t = 0;
    else if (t > 1) t = 1;
  }

  // Could not converge to a solution
  return null;
}
