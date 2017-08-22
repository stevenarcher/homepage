/**
 * Basic Button
 * ------------
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as commonStyles from './common/styles';
import * as commonProps from './common/props';
import { colors, typography, shadows, transitions, highlights } from '../../styles';

export const ButtonStyle = {
	primary: 'primary',
	secondary: 'secondary',
	tertiary: 'tertiary',
	ghost: 'ghost',
};

const Wrapper = styled.button`
	${props => {
		const { color, enabled, height, typographyStyle, otherStyles } = props;
		return `
			${transitions.fastEaseOut('background, color, box-shadow')}
			${commonStyles.base(props)}
			border: none;
			background: ${enabled ? color.enabled.background : color.disabled.background};
			color: ${enabled ? color.enabled.text : color.disabled.text};
			position: relative;
			padding-left: 12px;
			padding-right: 12px;
			height: ${height};
			overflow: hidden;
			display: flex;
			justify-content:center;
			align-content:center;
			flex-direction:column;
			cursor: ${enabled ? 'pointer' : 'not-allowed'};
			${typographyStyle}
			${enabled ? shadows.outerBottom : shadows.outerNone}
			&:hover {
				background: ${enabled ? color.hover.background : color.disabled.background};
				color: ${enabled ? color.hover.text : color.disabled.text};
			}
			${enabled ? highlights.ripple(color.active, 'active') : ''};
			${otherStyles}
		`;
	}};
`;

const Button = props => {
	const { style, width, enabled } = props;
	let height = '40px';
	let color;
	let otherStyles = ``;
	let typographyStyle = typography.button;
	switch (style) {
		case ButtonStyle.primary:
		default:
			color = colors.buttonPrimary;
			break;
	}

	return (
		<Wrapper
			color={color}
			enabled={enabled}
			height={height}
			otherStyles={otherStyles}
			typographyStyle={typographyStyle}
			width={width}
			onClick={props.onClick}
		>
			{props.children}
		</Wrapper>
	);
};

Button.propTypes = Object.assign({}, commonProps.propTypes, {
	style: PropTypes.oneOf([ButtonStyle.primary, ButtonStyle.secondary, ButtonStyle.tertiary, ButtonStyle.ghost]),
	width: PropTypes.string,
});

Button.defaultProps = Object.assign({}, commonProps.defaultProps, {
	style: ButtonStyle.primary,
	width: 'auto',
});

export default Button;
