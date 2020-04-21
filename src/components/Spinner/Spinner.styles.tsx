import styled, { keyframes } from "styled-components";
import { ISpinnerStyles } from "./Spinner";

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledSpinner = styled.div<ISpinnerStyles>(
  {
    display: "inline-block",
    position: "relative"
  },
  ({ spinnerSize }) => ({
    width: spinnerSize,
    height: spinnerSize
  })
);

export const StyledSpinnerSlice = styled.div<ISpinnerStyles>`
  transform-origin: ${props => props.spinnerSize! / 2}px
    ${props => props.spinnerSize! / 2}px;
  animation: ${fadeOut} 1.2s linear infinite;
  ::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0px;
    left: ${props => props.spinnerSize! / 2}px;
    width: ${props => props.spinnerSize! / 12}px;
    height: ${props => props.spinnerSize! / 4}px;
    border-radius: 20%;
    background-color: ${props => props.spinnerColor};
  }
`;
