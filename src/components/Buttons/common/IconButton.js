/**
 * Icon Button
 * -----------
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as commonStyles from './styles';
import * as commonProps from './props';
import { colors, typography, transitions, highlights } from '../../../styles';

let color = colors.buttonIcon;

export const IconButtonStyle = {
	normal: 'normal',
	light: 'light',
	grey: 'grey',
};

const Wrapper = styled.button`
	${props => `
	${commonStyles.base(props)}
	${transitions.fastEaseOut('color, background-color')}
	svg {
		.svgFill {
			${transitions.fastEaseOut('fill')}
		}
		.svgStroke { 
			${transitions.fastEaseOut('stroke')}
		}
	}
	background-color: ${props.enabled ? color.enabled.background : color.disabled.background};
	color: ${props.enabled ? color.enabled.text : color.disabled.text};
	position: relative;
	width: ${props.width};
	padding-left: 12px;
	padding-right: 12px;
	height: 40px;
	box-sizing: border-box;
	align-items:center;
	text-align: center;
	overflow: hidden;
	display: flex;
	justify-content:center;
	align-content:center;
	flex-direction:row;
	${typography.buttonLight}
	&:hover {
		background-color: ${props.enabled ? color.hover.background : color.disabled.background};
		color: ${props.enabled ? color.hover.text : color.disabled.text};
		svg {
			.svgFill {
				fill: ${color.hover.text};
			}
			.svgStroke {
				stroke: ${color.hover.text};
			}
		}
	}
	${props.enabled ? highlights.ripple(color.active, 'active', '80%') : ''};
`};
`;

const IconButton = props => {
	const Icon = props.icon;

	switch (props.color) {
		case IconButtonStyle.normal:
		default:
			color = colors.buttonIcon;
			break;
	}
	return (
		<Wrapper enabled={props.enabled} width={props.width} onClick={props.onClick}>
			<Icon color={color.enabled.text} width={props.iconWidth} />
			{props.children}
		</Wrapper>
	);
};

IconButton.propTypes = Object.assign({}, commonProps.propTypes, {
	color: PropTypes.oneOf([IconButtonStyle.normal, IconButtonStyle.light, IconButtonStyle.grey]),
	icon: PropTypes.func.isRequired,
	iconWidth: PropTypes.number.isRequired,
});

IconButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	color: IconButtonStyle.normal,
});

export default IconButton;
