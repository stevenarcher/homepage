/**
 * Spacing
 * -------
 */

const baseUnit = 0.25;

const spacing = (multiplier = 0) => `${(baseUnit * multiplier)}rem`;

export default spacing;
