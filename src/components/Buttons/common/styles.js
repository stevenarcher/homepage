export const base = props => `
	cursor: ${props.enabled ? 'pointer' : 'not-allowed'};
	border: none;
	width: ${props.width};
	box-sizing: border-box;
	align-items:center;
	text-align: center;
`;
