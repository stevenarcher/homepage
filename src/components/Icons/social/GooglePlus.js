/**
 * GooglePlus Icon
 * ---------------
 */

import React from 'react';
import PropTypes from 'prop-types';

function GooglePlus(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 33 32">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path
					className="svgFill"
					d="M12.968,8.768 C11.698,8.73 10.844,10.008 11.065,11.676 C11.284,13.346 12.492,14.512 13.763,14.551 C15.034,14.588 15.764,13.514 15.545,11.844 C15.326,10.176 14.239,8.807 12.968,8.768"
					fill={props.color}
				/>
				<path
					className="svgFill"
					d="M13.502,17.967 C11.608,17.945 10.003,19.162 10.003,20.574 C10.003,22.014 11.371,23.213 13.265,23.213 C15.928,23.213 16.856,22.088 16.856,20.646 C16.856,20.473 16.834,20.303 16.795,20.139 C16.586,19.324 15.758,18.877 14.729,18.162 C14.356,18.041 13.944,17.971 13.502,17.967"
					fill={props.color}
				/>
				<path
					className="svgFill"
					d="M24.211,11.482 L22.035,11.482 L22.035,13.656 L20.948,13.656 L20.948,11.482 L18.773,11.482 L18.773,10.395 L20.948,10.395 L20.948,8.219 L22.035,8.219 L22.035,10.395 L24.211,10.395 L24.211,11.482 Z M17.44,11.773 C17.44,12.816 16.863,13.656 16.047,14.293 C15.25,14.916 15.1,15.176 15.1,15.705 C15.1,16.156 16.051,16.828 16.489,17.156 C18.011,18.299 18.32,19.018 18.32,20.445 C18.32,22.229 16.399,24 13.276,24 C10.535,24 8.223,22.887 8.223,21.104 C8.223,19.295 10.141,17.408 12.881,17.408 C13.18,17.408 13.453,17.4 13.737,17.4 C13.362,17.037 13.059,16.723 13.059,16.172 C13.059,15.844 13.162,15.531 13.309,15.252 C13.16,15.262 13.008,15.271 12.852,15.271 C10.601,15.271 9.29,13.689 9.29,11.707 C9.29,9.766 11.285,8 13.678,8 C14.911,8 18.394,8 18.394,8 L17.34,9.107 L16.102,9.107 C16.976,9.607 17.44,10.637 17.44,11.773 Z M16.217,0 C7.381,0 0.217,7.164 0.217,16 C0.217,24.838 7.381,32 16.217,32 C25.054,32 32.217,24.838 32.217,16 C32.217,7.164 25.054,0 16.217,0 L16.217,0 Z"
					fill={props.color}
				/>
			</g>
		</svg>
	);
}

GooglePlus.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

GooglePlus.defaultProps = {
	width: 33,
	percent: false,
};

export default GooglePlus;
