/**
 * Shadows
 * -------
 * All the shadow styles for this application are located here
 */
import { rgba } from 'polished';
import colors from './colors';

export const outerLarge = `
  box-shadow: 0px 4px 10px 0px ${rgba(colors.shadows.main, 0.22)};
`;

export const outer = `
  box-shadow: 0px 2px 4px 0px ${rgba(colors.shadows.main, 0.5)};
`;

export const outerNone = `
  box-shadow: 0 0 0 0;
`;

export const outerBottom = `
  box-shadow: 0 1px 0px 0 ${rgba(colors.shadows.main, 0.2)};
`;

export const outerSides = `
  box-shadow: -5px 0px 30px 0 ${rgba(colors.shadows.main, 0.2)};
`;

export const innerNone = `
  box-shadow: inset 0 0 0 0;
`;

export const inner = `
  box-shadow: inset 0 1px 3px 0 ${rgba(colors.shadows.main, 0.5)};
`;
