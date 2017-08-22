/**
 * Flickr Icon
 * -----------
 */

import React from 'react';
import PropTypes from 'prop-types';

function Flickr(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 33 32">
			<g id="Buttons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path
					d="M20.451,19.549 C18.492,19.549 16.903,17.959 16.903,16 C16.903,14.041 18.492,12.451 20.451,12.451 C22.411,12.451 24,14.041 24,16 C24,17.959 22.411,19.549 20.451,19.549 Z M11.548,19.549 C9.588,19.549 8,17.959 8,16 C8,14.041 9.588,12.451 11.548,12.451 C13.507,12.451 15.097,14.041 15.097,16 C15.097,17.959 13.507,19.549 11.548,19.549 Z M16,0 C7.163,0 0,7.164 0,16 C0,24.838 7.163,32 16,32 C24.837,32 32,24.838 32,16 C32,7.164 24.837,0 16,0 L16,0 Z"
					fill={props.color}
				/>
			</g>
		</svg>
	);
}

Flickr.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

Flickr.defaultProps = {
	width: 33,
	percent: false,
};

export default Flickr;
