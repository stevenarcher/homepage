/**
 * LinkedIn Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { LinkedIn } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const LinkedInButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={LinkedIn}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

LinkedInButton.propTypes = commonProps.propTypes;
LinkedInButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default LinkedInButton;
