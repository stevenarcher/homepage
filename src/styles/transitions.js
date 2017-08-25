import { keyframes } from 'styled-components';

/**
 * Normal
 * @param {string} properties - separate with comers in the string
 */
export const normal = properties => `
	transition: all .4s ease;
	transition-property: ${properties};
`;

export const fastEaseOut = properties => `
	transition: all .15s ease-out;
	transition-property: ${properties};
`;

export const fastEaseIn = properties => `
	transition: all .15s ease-in;
	transition-property: ${properties};
`;

export const slowEaseIn = properties => `
	transition: all .4s ease-in;
	transition-property: ${properties};
`;

/*
export const typeIn = () =>`
	@-webkit-keyframes typing { from { width: 0; } }
	@-webkit-keyframes blink-caret { 50% { border-color: transparent; } }
	-webkit-animation: typing 2s steps(21, end), blink-caret .5s step-end infinite alternate;
`;

const slideUp = keyframes`
	0% { opacity: 0; transform: translate3d(0, 100%, 0); }
	90% { opacity: 1; }
	100% { transform: translate3d(0, 0, 0); }
`;



/*

 @mixin nth-animation-delay($items: 3, $time: 0.1s) {
 @for $i from 1 through $items {

 &:nth-child(#{$i}) {
 animation-delay: $time * $i;
 }
 }
 }


@include nth-animation-delay();

display: inline-block;

animation: slide-up 0.8s ease-in-out both;


	*/
