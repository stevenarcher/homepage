import React, {FunctionComponent} from 'react';
import { StyledText } from './Text.styles';
import Theme from '../../theme';

export interface ITypographyStyles {
  /** Css line-height value*/
  lineHeight?: string | number
  /** Css letter-spacing value*/
  letterSpacing?: string | number
  /** Css font-weight value*/
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
  /** Css font-size value*/
  fontSize?: keyof typeof Theme.fontSizes
  /** Css font-weight value*/
  fontWeight?: keyof typeof Theme.fontWeights
  /** Css color value*/
  color?: keyof typeof Theme.colors | string
  /** Css margin-top value*/
  marginTop?: string | number
  /** Css margin-right value*/
  marginRight?: string | number
  /** Css margin-bottom value*/
  marginBottom?: string | number
  /** Css margin-left value*/
  marginLeft?: string | number
  /** Css margin-left value*/
  textTransform?:
     | 'none'
     | 'capitalize'
     | 'uppercase'
     | 'lowercase'
     | 'initial'
     | 'inherit'
  /** Css display value*/
  display?:
     | 'none'
     | 'inline'
     | 'inline-block'
     | 'block'
     | 'flex'
     | 'inline-flex'
     | 'initial'
     | 'inherit'
}

export interface ITextStyles extends ITypographyStyles {
  /** StyledComponents polymorphic as prop */
  as: 'p' | 'div' | 'span'
  /** Displays a bottom border (inherits text color) */
  hasBottomBorder?: boolean
}

interface ITextProps extends ITextStyles {}

export const Text: FunctionComponent<ITextProps> = ({
  children,
  as,
  textAlign = 'left',
  fontSize = Theme.fontSizes[2],
  fontWeight = Theme.fontWeights[
    Theme.fontWeights.regular
  ] as keyof typeof Theme.fontWeights,
  color = Theme.colors.darkGrey as keyof typeof Theme.colors,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  textTransform = 'none',
  display = 'inherit',
  hasBottomBorder
}) => (
  <StyledText
    as={as}
    textAlign={textAlign}
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    textTransform={textTransform}
    display={display}
    hasBottomBorder={hasBottomBorder}
  >
    {children}
  </StyledText>
)
