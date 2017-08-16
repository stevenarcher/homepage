/**
 * Arrow Icon
 * ---------
 */

import React from 'react';
import PropTypes from 'prop-types';
import * as commonProps from './props';

function ArrowIcon(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 22 22">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g className="svgFill" fill={props.color}>
					<g
						transform={`translate(10.606602, 10.606602) rotate(${props.rotation}) translate(-10.606602, -10.606602) translate(3.106602, 3.106602)`}
					>
						<path d="M2,13 L2,-1.89182003e-13 L1.87849736e-13,-1.89059539e-13 L1.88678702e-13,14 L1.90070182e-13,15 L15,15 L15,13 L2,13 Z" />
					</g>
				</g>
			</g>
		</svg>
	);
}

ArrowIcon.propTypes = Object.assign({}, commonProps.propTypes, {
	rotation: PropTypes.number,
});

ArrowIcon.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: 22,
	rotation: 45,
});

export default ArrowIcon;
