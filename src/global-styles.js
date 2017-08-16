import { injectGlobal } from 'styled-components';

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
		height: 100%;
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
`;
