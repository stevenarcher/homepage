import { keyframes } from 'styled-components';

/**
 * Type In Animation
 * -----------------
 * a css typing animation with blinking cursor
 */


const typing = keyframes`
	from { width: 0; }
`;

const blinkCursor = keyframes`
	50% { border-color: transparent; }
`;

// TODO calculate width based on chartres, font and font size
const TypeIn = () =>`
	border-right: .1em solid black;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	-webkit-animation: ${typing} 2s steps(21, end), ${blinkCursor} .5s step-end infinite alternate;
`;



export default TypeIn;
