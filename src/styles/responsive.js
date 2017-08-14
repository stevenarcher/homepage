/**
 * Responsive
 * ----------
 * responsive css breakpoints can be found here
 */

export const minWidths = {
	tablet: 768,
	desk: 1024,
	deskWide: 1200,
};

export const tablet = content => `
  @media screen and (min-width: ${minWidths.tablet}px) {
    ${content}
  }
`;

export const desk = content => `
  @media screen and (min-width: ${minWidths.desk}px) {
    ${content}
  }
`;

export const deskWide = content => `
  @media screen and (min-width: ${minWidths.deskWide}px) {
    ${content}
  }
`;
