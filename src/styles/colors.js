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

const conch = '#d8e2dc';
const kerry = '#ffe5d9';
const pastelPink = '#ffcad4';
const wewak = '#f4acb7';
const mountbattenPink = '#9d8189';

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
		header: rgba(mountbattenPink,1),
		text: rgba(mountbattenPink,0.8),
		background: conch,
	},
	shadows: {
		main: soyaBean,
	},

	buttonPrimary: {
		enabled: {
			background: kerry,
			text: soyaBean,
		},
		disabled: {
			background: rgba(conch, 0.3),
			text: rgba(grayChateau, 0.4),
		},
		hover: {
			background: sinbad,
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

	buttonSocial: {
		enabled: {
			background: rgba(white, 0.2),
			text: mountbattenPink,
		},
		disabled: {
			background: rgba(pastelPink, 0.1),
			text: rgba(mountbattenPink, 0.2),
		},
		hover: {
			background: rgba(white, 0.5),
			text: sinbad,
		},
		active: white,
	},
};

export default colors;
