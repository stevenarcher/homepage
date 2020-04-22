import styled from "styled-components";
import { lighten, darken, transparentize } from "polished";
import { ButtonVariant, IButtonStyles } from "./Button";
import { Theme } from '../../theme';

const getDisabledStyles = (disabled: boolean) => disabled ? {
	cursor: "not-allowed",
	opacity: 0.5
} : {
	cursor: "pointer"
};

interface IButtonColors {
	color:string,
	borderColor:string,
	backgroundColor:string,
	hoverColor:string,
	focusColor:string
}

const getButtonColors = (variant: ButtonVariant, disabled:boolean):IButtonColors => {
	switch (variant) {
		case ButtonVariant.GHOST:
			return {
				color: transparentize( disabled ? 0.5 : 0,Theme.colors.black),
				borderColor: Theme.colors.transparent,
				backgroundColor: Theme.colors.transparent,
				hoverColor: darken(0.03, Theme.colors.lightGrey),
				focusColor: darken(0.03, Theme.colors.lightGrey)
			};
		case ButtonVariant.PRIMARY:
			return {
				color: transparentize( disabled ? 0.5 : 0,Theme.colors.black),
				borderColor: Theme.colors.transparent,
				backgroundColor: Theme.colors.primary,
				hoverColor: darken(0.13, Theme.colors.primary),
				focusColor: lighten(0.2, Theme.colors.primary)
			};
		case ButtonVariant.SECONDARY:
		default:
			return {
				color: transparentize( disabled ? 0.5 : 0,Theme.colors.black),
				borderColor: Theme.colors.transparent,
				backgroundColor: Theme.colors.secondary,
				hoverColor: darken(0.13, Theme.colors.secondary),
				focusColor: lighten(0.2, Theme.colors.secondary)
			}
	}
};

export const StyledButton = styled.button<IButtonStyles>(

	({variant, disabled, display}) => {
		const colors = getButtonColors(variant,disabled);
		return {
			alignItems: "center",
			borderRadius: Theme.radii[1],
			fontFamily: Theme.fonts.body,
			fontSize: Theme.fontSizes[2],
			padding: `${Theme.space[2]}px ${Theme.space[4]}px`,
			lineHeight: Theme.lineHeights.body,
			textDecoration: "none",
			minWidth: "120px",
			textAlign: "center",
			justifyContent: "center",
			outline: "none",
			transition: ".2s linear background-color, .2s ease-in-out border-radius, .2s linear box-shadow",
			whiteSpace: "nowrap",
			textTransform: "uppercase",
			WebkitTapHighlightColor: Theme.colors.transparent,
			a: {
				textDecoration: "none",
				color: "inherit",
				":focus": {
					outline: "none"
				}
			},
			color: colors.color,
			border: `2px solid ${colors.borderColor}`,
			backgroundColor:  colors.backgroundColor,
			display,
			width: display === "block" ? "100%" : "auto",
			":hover: enabled": {
				borderRadius: Theme.radii[2],
				backgroundColor:  colors.hoverColor
			},
			":focus: enabled, :active: enabled": {
				borderRadius: Theme.radii[1],
				boxShadow: `0 0 0 3px ${ colors.focusColor}`
			},
			...getDisabledStyles(disabled!)
		}}
);
