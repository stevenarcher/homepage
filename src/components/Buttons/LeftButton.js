/**
 * Left Button
 * -----------
 */

import React from 'react';
import * as commonProps from './common/props';
import LeftIcon from '../Icons/LeftIcon';
import IconButton, { IconButtonStyle } from './common/IconButton';

const LeftButton = props => {
	return (
		<IconButton
			onClick={props.onClick}
			enabled={props.enabled}
			width={props.width}
			icon={LeftIcon}
			iconWidth={20}
			color={IconButtonStyle.grey}
		>
			{props.children}
		</IconButton>
	);
};

LeftButton.propTypes = commonProps.propTypes;
LeftButton.defaultProps = commonProps.defaultProps;
export default LeftButton;
