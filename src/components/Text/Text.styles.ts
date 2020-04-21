import styled from 'styled-components'
import { ITextStyles } from './Text'
import Theme from "../../theme";

export const StyledText = styled.p<ITextStyles>(
  {
    fontFamily: Theme.fonts.body,
    lineHeight: Theme.lineHeights.body,
    letterSpacing: 'normal',
    WebkitFontSmoothing: 'antialiased'
  },
  ({
    textAlign,
    fontSize,
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
    fontSize,
    fontWeight:
      Theme.fontWeights[fontWeight as keyof typeof Theme.fontWeights],
    color,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    textTransform,
    display,
    borderBottom: hasBottomBorder ? '2px solid' : 'none',
    borderBottomColor: 'inherit'
  })
)
