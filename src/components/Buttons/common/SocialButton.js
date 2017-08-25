/**
 * Social Button
 * -------------
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as commonStyles from './styles';
import * as commonProps from './props';
import { colors, typography, transitions, highlights } from '../../../styles';

let color = colors.buttonSocial;



const Wrapper = styled.button`
	${props => `
	${commonStyles.base(props)}
	${transitions.fastEaseOut('color, background-color')}
	svg {
		z-index: 10;
		.svgFill {
			${transitions.fastEaseOut('fill')}
		}
		.svgStroke { 
			${transitions.fastEaseOut('stroke')}
		}
	}
	background-color: ${props.enabled ? color.enabled.background : color.disabled.background};
	color: ${props.enabled ? color.enabled.text : color.disabled.text};
	height: ${props.width};
	width: ${props.width};
	position: relative;
	box-sizing: border-box;
	align-items:center;
	text-align: center;
	overflow: hidden;
	display: flex;
	justify-content:center;
	align-content:center;
	flex-direction:row;
	border-radius: 50%;	
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
	${props.enabled ? highlights.ripple(color.active, 'active', '90%', 'after') : ''};
`};
`;

const SocialButton = props => {
	const Icon = props.icon;
	return (
		<Wrapper enabled={props.enabled} width={props.width} height={props.width} onClick={props.onClick}>
			<Icon color={color.enabled.text} width={props.iconWidth} />
			{props.children}
		</Wrapper>
	);
};

SocialButton.propTypes = Object.assign({}, commonProps.propTypes, {
	icon: PropTypes.func.isRequired,
	iconWidth: PropTypes.number.isRequired,
});

SocialButton.defaultProps = commonProps.defaultProps;

export default SocialButton;