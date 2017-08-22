/**
 * YouTube Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { YouTube } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const YouTubeButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={YouTube}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

YouTubeButton.propTypes = commonProps.propTypes;
YouTubeButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default YouTubeButton;
