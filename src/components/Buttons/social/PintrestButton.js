/**
 * Pintrest Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { Pintrest } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const PintrestButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={Pintrest}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

PintrestButton.propTypes = commonProps.propTypes;
PintrestButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default PintrestButton;
