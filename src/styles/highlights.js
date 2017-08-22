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
