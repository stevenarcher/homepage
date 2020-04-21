interface ITheme {
  colors: { [color: string]: string };
  fonts: { [font: string]: string };
  fontSizes: number[];
  fontWeights: { [font: string]: number };
  lineHeights: { [element: string]: number | number[] };
  space: number[];
  radii: number[];
  borderWidths: number[];
  shadows: string[];
  zIndices: { [element: string]: number };
  breakpoints: number[];
}

export const Theme = {
  colors: {
    primary: "#E32526",
    primaryDark: "#9D1415",
    lightBlue: "#D4E6F1",
    blue: "#2980B9",
    darkBlue: "#273B4F",
    green: "#19AC6A",
    darkGrey: "#444444",
    grey: "#C6C6C6",
    midGrey: "#F0F0F0",
    lightGrey: "#F5F5F5",
    black: "#000000",
    white: "#ffffff",
    transparent: "rgba(0,0,0,0)"
  },

  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`
  },

  //          xs  sm  p   h6  h5  h4  h3  h2  h1
  fontSizes: [12, 14, 16, 18, 18, 18, 24, 32, 48],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },

  lineHeights: {
    body: 1.5,
    //        h6    h5    h4    h3    h2    h1
    heading: [1.33, 1.33, 1.33, 1.33, 1.35, 1.17]
  },

  space: [0, 4, 8, 16, 24, 32, 64, 128],

  radii: [0, 4, 8, 16, 24, 32, 64, 128],

  borderWidths: [1, 2, 3, 4, 5, 6],

  shadows: [
    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  ],

  zIndices: {
    stickyTableRow: 2,
    stickyTableRowTop: 3,
    searchInput: 4,
    dropdown: 5,
    modal: 999
  },

  breakpoints: [576, 768, 992, 1200]
};
