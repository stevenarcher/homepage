/**
 * Colors
 * ------
 * All the colors for this application are located here
 */

import { rgba } from 'polished';

// Color Palette --------------------------------------------------------------
const white = '#FFFFFF';
const mystic = '#E3E8EC';
const iron = '#CED4D8';
const grayChateau = '#A8AFB3';
const black = '#000000';

const cinnabar = '#EA4D4D';
const sinbad = '#9CD8D1';
const sandDune = '#837569';
const soyaBean = '#61544B';
const sage = '#9EA086';

export const palette = {
	white,
	mystic,
	iron,
	grayChateau,
	black,
	cinnabar,
	sinbad,
	sandDune,
	soyaBean,
	sage,
};

// Main Color Theme -----------------------------------------------------------
export const colors = {
	base: {
		text: cinnabar,
		background: grayChateau,
	},
	shadows: {
		main: black,
	},

	buttonPrimary: {
		enabled: {
			background: sinbad,
			text: black,
		},
		disabled: {
			background: rgba(sinbad, 0.3),
			text: rgba(grayChateau, 0.4),
		},
		hover: {
			background: cinnabar,
			text: white,
		},
		active: rgba(white, 0.2),
	},

	buttonIcon: {
		enabled: {
			background: rgba(white, 0),
			text: cinnabar,
		},
		disabled: {
			background: rgba(white, 0),
			text: rgba(cinnabar, 0.2),
		},
		hover: {
			background: rgba(white, 0),
			text: sinbad,
		},
		active: rgba(sinbad, 0.4),
	},
};

export default colors;
