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

const islandSpice = '#fffded';
const goldenFizz = '#fae945';
const ronchi = '#f1d54c';
const santasGray = '#9d9daa';
const stormGray = '#6a6981';


export const palette = {
	white,
	black,
	islandSpice,
	goldenFizz,
	ronchi,
	santasGray,
	stormGray,
};

// Main Color Theme -----------------------------------------------------------
export const colors = {
	base: {
		header: black,
		text: black,
		background: santasGray,
		backgroundDark: stormGray,
	},
	shadows: {
		main: black,
	},

	card: {
		background: black,//color27,
		backgroundLight: islandSpice,
		highlight: black,
		text: white,
		header: black,
	},

	buttonPrimary: {
		enabled: {
			background: ronchi,
			text: santasGray,
		},
		disabled: {
			background: rgba(black, 0.3),
			text: rgba(black, 0.4),
		},
		hover: {
			background: goldenFizz,
			text: black,
		},
		active: rgba(islandSpice, 0.8),
	},

	buttonIcon: {
		enabled: {
			background: rgba(white, 0),
			text: black,
		},
		disabled: {
			background: rgba(white, 0),
			text: rgba(black, 0.2),
		},
		hover: {
			background: rgba(white, 0),
			text: black,
		},
		active: rgba(black, 0.4),
	},

	buttonSocial: {
		enabled: {
			background: santasGray,
			text: ronchi,
		},
		disabled: {
			background: rgba(black, 0.1),
			text: rgba(black, 0.2),
		},
		hover: {
			background: black,
			text: goldenFizz,
		},
		active: white,
	},
};

export default colors;
