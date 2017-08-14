/**
 * Fonts
 * -----
 * All the font styles for this application are located here
 */
import colors from './colors';
import * as responsive from './responsive';
/* eslint-disable no-unused-vars, import/first */

// Defaults -------------------------------------------------------------------
export const defaults = {
	font: `font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;`,
	fontSize: 'font-size: 12px',
	lineSpacing: 'line-height: 1.25',
};

// Weights --------------------------------------------------------------------
const thin = 'font-weight: 200;';
const light = 'font-weight: 300;';
const regular = 'font-weight: 400;';
const bold = 'font-weight: 600;';

// Size -----------------------------------------------------------------------
const fontSize = size => `
  font-size: ${size}px;
`;

// Styles ---------------------------------------------------------------------
/**
 * Responsive Style
 * the key in the sizes dictionary needs to match a function in responsive, it also needs a base value for the default size.
 * Example Sizes Dictionary: { base: 12, tablet: 14, desk: 16}
 * @param {{[key:string]:number, base:number}} sizes
 * @param {string} weight
 * @param {string} [color]
 */
const responsiveStyle = (sizes, weight, color) => {
	const responsiveSizes = [];
	Object.keys(sizes).forEach(key => {
		if (key !== 'base') {
			responsiveSizes.push({ breakpoint: responsive[key], size: sizes[key] });
		}
	});
	const size = sizes.base;
	if (!size) throw new Error('Responsive Style - you need to provide a base value');
	return `
    ${defaults.font}
    ${fontSize(size)}
    ${weight}
    color: ${color === undefined ? colors.text.main : color};
    ${responsiveSizes.map(style => style.breakpoint(fontSize(style.size)))}
  `;
};

/**
 * Style
 * @param {number} size
 * @param {string} weight
 * @param {string} fontStyle
 * @param {string} lineHeight
 * @param {string} letterSpacing
 */
const style = ({ size, weight, fontStyle = 'normal', lineHeight = 'normal', letterSpacing = '0px' }) => `
  ${defaults.font}
  ${fontSize(size)}
  ${weight}
  font-style: ${fontStyle};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;

export const style1 = style({ size: 13, weight: bold, lineHeight: '15px' });

export const header1 = style({ size: 14, weight: bold, lineHeight: '15px' });
export const header2 = style({ size: 18, weight: bold, lineHeight: '20px' });

export const body = style({ size: 15, weight: regular, lineHeight: '22px' });

