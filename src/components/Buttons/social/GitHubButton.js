/**
 * GitHub Button
 * -------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { GitHub  } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const GitHubButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={GitHub }
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

GitHubButton.propTypes = commonProps.propTypes;
GitHubButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default GitHubButton;
