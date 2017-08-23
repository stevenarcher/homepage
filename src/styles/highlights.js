import * as transitions from './transitions';

/**
 * Ripple Highlight
 * similar to material design
 * @param {string} color
 * @param {string} state
 * @param {string} amount
 * @param {string} pseudo
 */
export const ripple = (color, state = 'active', amount = '120%', pseudo = 'before') => `

	overflow: hidden;
	&:${pseudo} {
			content: "";
			
			box-sizing: border-box;
			position: absolute;
			top: 50%;
			left: 50%;
			
			display: block;
			width: 0;
			padding-top: 0;
				
			border-radius: 100%;
			
			background-color: ${color};
			transform: translate(-50%, -50%);		
		}
		&:${state} {
			&:${pseudo} {
				width: ${amount};
				padding-top: ${amount};
				${transitions.fastEaseOut('width, padding-top')}
			}
		}
`;

/**
 * Underline Highlight
 * an underline that grows on hover to fill the background
 * @param backgroundImage
 */
export const underline = (backgroundImage = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)') =>`
	background-image: ${backgroundImage};
	background-repeat: no-repeat;
	background-size: 100% 0.2em;
	background-position: 0 88%;
	transition: background-size 0.25s ease-in;
	&:hover {
		background-size: 100% 88%;
	}
`;
