/**
 * Cross Icon
 * ----------
 */

import React from 'react';
import PropTypes from 'prop-types';

function CrossIcon(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 16 17">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
				<g className="svgStroke" transform="translate(-1554.000000, -161.000000)" stroke={props.color} strokeWidth="2">
					<g transform="translate(1.000000, 131.000000)">
						<g transform="translate(1553.000000, 31.000000)">
							<path d="M1.2,14.8 L14.8,1.2" />
							<path d="M1.2,1.2 L14.8,14.8" />
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

CrossIcon.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

CrossIcon.defaultProps = {
	width: 16,
	percent: false,
};

export default CrossIcon;
