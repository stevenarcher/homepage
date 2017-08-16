/**
 * Close Button
 * ------------
 */

import React from 'react';
import * as commonProps from './common/props';
import CrossIcon from '../Icons/CrossIcon';
import IconButton, { IconButtonStyle } from './common/IconButton';

const CloseButton = props => {
	return (
		<IconButton
			enabled={props.enabled}
			width={props.width}
			icon={CrossIcon}
			iconWidth={17}
			color={IconButtonStyle.grey}
			onClick={props.onClick}
		>
			{props.children}
		</IconButton>
	);
};

CloseButton.propTypes = commonProps.propTypes;
CloseButton.defaultProps = commonProps.defaultProps;
export default CloseButton;
