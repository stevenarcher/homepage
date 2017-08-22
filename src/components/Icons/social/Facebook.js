/**
 * Facebook Icon
 * ------------
 */

import React from 'react';
import PropTypes from 'prop-types';

function Facebook(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 32 32">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path
					className="svgFill"
					d="M19.428,16.006 L17.186,16.006 C17.186,19.588 17.186,24 17.186,24 L13.864,24 C13.864,24 13.864,19.633 13.864,16.006 L12.284,16.006 L12.284,13.182 L13.864,13.182 L13.864,11.354 C13.864,10.045 14.485,8 17.216,8 L19.677,8.01 L19.677,10.752 C19.677,10.752 18.181,10.752 17.891,10.752 C17.6,10.752 17.186,10.896 17.186,11.521 L17.186,13.182 L19.719,13.182 L19.428,16.006 Z M16,0 C7.164,0 0,7.164 0,16 C0,24.838 7.164,32 16,32 C24.837,32 32,24.838 32,16 C32,7.164 24.837,0 16,0 L16,0 Z"
					fill={props.color}
				/>
			</g>
		</svg>
	);
}

Facebook.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

Facebook.defaultProps = {
	width: 32,
	percent: false,
};

export default Facebook;
