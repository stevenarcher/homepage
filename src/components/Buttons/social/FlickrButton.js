/**
 * Flickr Button
 * -------------
 */

import React from 'react';
import * as commonProps from '../common/props';
import { Flickr } from '../../Icons/social/index';
import SocialButton  from '../common/SocialButton';

const FlickrButton = props => {
	return (
		<SocialButton
			enabled={props.enabled}
			width={props.width}
			height={props.height}
			icon={Flickr}
			iconWidth={32}
			onClick={props.onClick}
		>
			{props.children}
		</SocialButton>
	);
};

FlickrButton.propTypes = commonProps.propTypes;
FlickrButton.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: '40px',
});
export default FlickrButton;
