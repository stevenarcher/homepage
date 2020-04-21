import styled from 'styled-components'
import { IHeadingStyles } from './Heading'
import Theme from "../../theme";


const getHeadingStyles = (as: string) => {
  const config = {
    ['h1']: {
      fontSize: Theme.fontSizes[8],
      lineHeight: Theme.lineHeights.heading[5]
    },
    ['h2']: {
      fontSize: Theme.fontSizes[7],
      lineHeight: Theme.lineHeights.heading[4]
    },
    ['h3']: {
      fontSize: Theme.fontSizes[6],
      fontWeight: Theme.fontWeights.bold,
      lineHeight: Theme.lineHeights.heading[3]
    },
    ['h4']: {
      fontSize: Theme.fontSizes[5],
      fontWeight: Theme.fontWeights.bold,
      lineHeight: Theme.lineHeights.heading[2]
    },
    ['h5']: {
      fontSize: Theme.fontSizes[4],
      lineHeight: Theme.lineHeights.heading[1]
    },
    ['h6']: {
      fontSize: Theme.fontSizes[3],
      lineHeight: Theme.lineHeights.heading[0]
    }
  }

  return config[as]
}

export const StyledHeading = styled.h1<IHeadingStyles>(
  {
    fontFamily: Theme.fonts.heading,
    fontWeight: Theme.fontWeights.regular,
    letterSpacing: 'normal',
    WebkitFontSmoothing: 'antialiased'
  },
  ({
    as,
    textAlign,
    fontWeight,
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    textTransform,
    display,
    hasBottomBorder
  }) => ({
    textAlign,
    fontWeight:
      Theme.fontWeights[fontWeight as keyof typeof Theme.fontWeights],
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    textTransform,
    display,
    flexBasis: '100%',
    borderBottom: hasBottomBorder ? '2px solid' : 'none',
    borderBottomColor: 'inherit',
    ...getHeadingStyles(as)
  })
)
