import React from 'react'
import { StyledHeading } from './Heading.styles'
import Theme from '../../theme';
import {ITypographyStyles} from '../Text';

export interface IHeadingStyles extends ITypographyStyles {
  /** StyledComponents polymorphic as prop */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Displays a bottom border (inherits text color) */
  hasBottomBorder?: boolean
}

interface IHeadingProps extends IHeadingStyles {}

export const Heading: React.FC<IHeadingProps> = ({
  className = '',
  children,
  as,
  textAlign = 'left',
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
  <StyledHeading
    className={`-heading ${className}`}
    as={as}
    textAlign={textAlign}
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
  </StyledHeading>
)
