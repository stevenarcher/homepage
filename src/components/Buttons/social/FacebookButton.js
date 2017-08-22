/**
 * Facebook Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { Facebook } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const FacebookButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={Facebook}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

FacebookButton.propTypes = commonProps.propTypes;
FacebookButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default FacebookButton;
