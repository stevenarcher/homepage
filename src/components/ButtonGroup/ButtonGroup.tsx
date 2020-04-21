import React, { FunctionComponent, ReactNode } from "react";
import { StyledButtonGroup } from "./ButtonGroup.styles";
import Theme from '../../theme';

export interface IButtonGroupStyles {
  /** The space between the buttons */
  space?: number;
  /** Css justify-content value */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
}

interface IButtonGroupProps extends IButtonGroupStyles {
  /** ReactNode to display as child */
  children: ReactNode;
}

export const ButtonGroup: FunctionComponent<IButtonGroupProps> = ({
  children,
  space = Theme.space[2],
  justifyContent = "initial"
}) => {
  return (
    <StyledButtonGroup space={space} justifyContent={justifyContent}>
      {children}
    </StyledButtonGroup>
  );
};
