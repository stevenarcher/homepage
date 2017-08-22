/**
 * BitBucket Button
 * ---------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { BitBucket } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const BitBucketButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={BitBucket}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

BitBucketButton.propTypes = commonProps.propTypes;
BitBucketButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default BitBucketButton;
