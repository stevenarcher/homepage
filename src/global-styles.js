import { injectGlobal } from 'styled-components';
import { colors, typography } from './styles';

const color = colors.base;

injectGlobal`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
	
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-y: hidden;
		-ms-overflow-style: scrollbar;
		-webkit-app-region:drag;
		-webkit-user-select: none;
		input[type="submit"],
		input[type="reset"],
		input[type="button"],
		input[type="text"],
		button,
		textarea {
			-webkit-app-region: no-drag;
		}
		
		color: ${color.text};
		${typography.body}		
	}
	
	p {
		margin: 0;
	}
	
	*:focus {
		outline: none;
	}
	
	#root, [data-reactroot] {
		height: 100%;
	}
	
	[data-reactroot] {
		display: flex;
		flex-direction: column;
	}
	
	@font-face {
    font-family: 'rubikregular';
    src: url('fonts/rubik-regular-webfont.woff2') format('woff2'),
         url('fonts/rubik-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

	}
	
	@font-face {
			font-family: 'cabinregular';
			src: url('fonts/cabin-regular-webfont.woff2') format('woff2'),
					 url('fonts/cabin-regular-webfont.woff') format('woff');
			font-weight: normal;
			font-style: normal;
	
	}
`;
