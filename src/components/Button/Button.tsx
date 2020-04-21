import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styles";

export enum ButtonVariant {
  GHOST = "ghost",
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

export interface IButtonStyles {
  /** The button variant style*/
  variant?: ButtonVariant;
  /** Css display value */
  display?: "block" | "inline-flex";
  /** StyledComponents polymorphic as prop */
  as?: "div" | "span";
}

interface IButtonProps
  extends IButtonStyles,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({
  className = "",
  children,
  variant = ButtonVariant.SECONDARY,
  type = "button",
  display = "inline-flex",
  as,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      as={as}
      type={type}
      variant={variant}
      display={display}
    >
      {children}
    </StyledButton>
  );
};
