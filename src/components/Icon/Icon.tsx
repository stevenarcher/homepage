import React, {HTMLAttributes} from 'react';
import { StyledSvg } from './Icon.styles';
import { paths } from './Icon.paths';

interface IIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  /** The name of icon from paths */
  iconName: string
  /** The icon fill */
  iconFill?: 'initial' | 'inherit' | 'currentcolor' | string
  /**  The icon size */
  iconSize?: string | number
}

export const Icon: React.FC<IIconProps> = ({
  style,
  className,
  iconName,
  iconFill = 'currentcolor',
  iconSize = 24
}) => (
  <StyledSvg
    style={{ ...style }}
    className={`-icon ${className}`}
    width={iconSize}
    height={iconSize}
    viewBox={`0 0 24 24`}
    preserveAspectRatio="xMidYMid meet"
    x="0"
    y="0"
    name={iconName}
  >
    <path d={paths[iconName]} fill={iconFill} />
    <path d="M0 0h24v24H0z" fill="none" />
  </StyledSvg>
)
