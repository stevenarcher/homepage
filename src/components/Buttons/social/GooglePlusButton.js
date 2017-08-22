/**
 * GooglePlus Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { GooglePlus } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const GooglePlusButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={GooglePlus}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

GooglePlusButton.propTypes = commonProps.propTypes;
GooglePlusButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default GooglePlusButton;
