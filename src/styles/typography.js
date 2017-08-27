/**
 * Fonts
 * -----
 * All the font styles for this application are located here
 */
import colors from './colors';
import * as responsive from './responsive';

// Defaults -------------------------------------------------------------------

const fonts = {
	main: `font-family: 'rubikregular', 'Helvetica Neue', Helvetica, Arial, sans-serif;`,
	title: `font-family: 'cabinregular', 'Helvetica Neue', Helvetica, Arial, sans-serif;`,
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
    ${fonts.main}
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
 * @param {string} font
 */
const style = ({ size, weight, fontStyle = 'normal', lineHeight = 'normal', letterSpacing = '0px', font = fonts.main }) => `
  ${font}
  ${fontSize(size)}
  ${weight}
  font-style: ${fontStyle};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`;

export const style1 = style({ size: 13, weight: thin, letterSpacing: '1px', lineHeight: '15px', font: fonts.main });

export const header1 = style({ size: 32, weight: regular, lineHeight:'40px', letterSpacing: '0px', font: fonts.title});
export const header2 = style({ size: 22, weight: regular, lineHeight: '20px', font: fonts.main });

export const body = style({ size: 15, weight: regular, lineHeight: '22px' });

export const button = style({ size: 14, weight: regular });
export const buttonLight = style({ size: 14, weight: regular });
