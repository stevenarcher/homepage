/**
 * Twitter Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { Twitter } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const TwitterButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={Twitter}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

TwitterButton.propTypes = commonProps.propTypes;
TwitterButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default TwitterButton;
