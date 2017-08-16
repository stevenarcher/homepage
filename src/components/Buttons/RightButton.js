/**
 * Right Button
 * -----------
 */

import React from 'react';
import * as commonProps from './common/props';
import RightIcon from '../Icons/RightIcon';
import IconButton, { IconButtonStyle } from './common/IconButton';

const RightButton = props => {
	return (
		<IconButton
			onClick={props.onClick}
			enabled={props.enabled}
			width={props.width}
			icon={RightIcon}
			iconWidth={20}
			color={IconButtonStyle.grey}
		>
			{props.children}
		</IconButton>
	);
};

RightButton.propTypes = commonProps.propTypes;
RightButton.defaultProps = commonProps.defaultProps;
export default RightButton;
