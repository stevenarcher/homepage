import React, { FunctionComponent } from "react";
import { StyledSpinner, StyledSpinnerSlice } from "./Spinner.styles";

export interface ISpinnerStyles {
  /** The spinner color */
  spinnerColor?: string;
  /** The spinner size */
  spinnerSize?: number;
}

interface ISpinnerProps extends ISpinnerStyles {}

export const Spinner: FunctionComponent<ISpinnerProps> = ({
  spinnerSize = 20,
  spinnerColor = "#777777"
}) => {
  const slices = new Array(12).fill(null);
  const angle = Math.abs(360 / slices.length);
  const delayDuration = slices.length / 10;

  return (
    <StyledSpinner spinnerSize={spinnerSize}>
      {slices.map((slice, index) => (
        <StyledSpinnerSlice
          key={index}
          spinnerSize={spinnerSize}
          spinnerColor={spinnerColor}
          style={{
            transform: `rotate(${index * angle}deg)`,
            animationDelay: `-${delayDuration - index / 10}s`
          }}
        >
          {slice}
        </StyledSpinnerSlice>
      ))}
    </StyledSpinner>
  );
};
