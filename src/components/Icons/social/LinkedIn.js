/**
 * LinkedIn Icon
 * -------------
 */

import React from 'react';
import PropTypes from 'prop-types';

function LinkedIn(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 32 32">
			<g id="Buttons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path
					className="svgFill"
					d="M24.61,23.646 L21.18,23.646 L21.18,18.127 C21.18,16.74 20.684,15.793 19.442,15.793 C18.495,15.793 17.93,16.434 17.682,17.049 C17.591,17.27 17.569,17.574 17.569,17.885 L17.569,23.646 L14.14,23.646 C14.14,23.646 14.184,14.297 14.14,13.33 L17.569,13.33 L17.569,14.791 C18.026,14.086 18.84,13.088 20.66,13.088 C22.916,13.088 24.61,14.561 24.61,17.73 L24.61,23.646 Z M10.527,11.92 L10.504,11.92 C9.354,11.92 8.61,11.127 8.61,10.137 C8.61,9.125 9.377,8.354 10.549,8.354 C11.723,8.354 12.446,9.125 12.467,10.137 C12.467,11.127 11.723,11.92 10.527,11.92 Z M8.812,23.646 L12.243,23.646 L12.243,13.33 L8.812,13.33 L8.812,23.646 Z M16.61,0 C7.773,0 0.61,7.164 0.61,16 C0.61,24.838 7.773,32 16.61,32 C25.446,32 32.61,24.838 32.61,16 C32.61,7.164 25.446,0 16.61,0 L16.61,0 Z"
					fill={props.color}
				/>
			</g>
		</svg>
	);
}

LinkedIn.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

LinkedIn.defaultProps = {
	width: 32,
	percent: false,
};

export default LinkedIn;
