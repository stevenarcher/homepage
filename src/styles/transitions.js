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
