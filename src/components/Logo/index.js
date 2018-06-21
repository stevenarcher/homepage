/**
 * Logo
 * ----
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../styles';

function Logo(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 62 62">
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<polygon
					id="logo-outer"
					stroke={props.outerStroke}
					fill={props.outerFill}
					points="1.0627157 29.0205464 21.8719205 23.0536029 24.6708192 0.193305973 39.2873179 18.0598181 60.4697098 11.985865 46.6881711 31.1216467 61.1564868 49.9571786 37.1011471 43.5430109 20.8947221 61.5020538 22.766147 37.9811767"
				/>
				<polygon
					id="logo-inner"
					stroke={props.innerStroke}
					fill={props.innerFill}
					points="15.6109873 29.8822544 27.061396 26.5989025 28.6015094 14.0198662 36.6443388 23.8510379 48.3000962 20.5088033 40.7167094 31.0383993 48.678 41.4027809 35.4413832 37.8733408 26.5236858 47.7554283 27.5534503 34.8129031"
				/>
				<polygon
					id="logo-arrow"
					stroke={props.arrowStroke}
					fill={props.arrowFill}
					transform="translate(21.420942, 22.076610) rotate(38.000000) translate(-21.420942, -22.076610) "
					points="37.6959979 22.07661 5.14588542 8.62875482 11.1885139 22.07661 5.14588542 35.5244651"
				/>
			</g>
		</svg>
	);
}

Logo.propTypes = {
	width: PropTypes.number,
	percent: PropTypes.bool,
	outerFill: PropTypes.string,
	outerStroke: PropTypes.string,
	innerFill: PropTypes.string,
	innerStroke: PropTypes.string,
	arrowFill: PropTypes.string,
	arrowStroke: PropTypes.string,
};

Logo.defaultProps = {
	width: 62,
	percent: false,
	outerFill: colors.buttonPrimary.active.backgroundColor,
	outerStroke: colors.buttonPrimary.active.backgroundColor,
	innerFill: colors.buttonPrimary.active.backgroundColor,
	innerStroke: colors.buttonPrimary.active.backgroundColor,
	arrowFill: colors.buttonPrimary.active.backgroundColor,
	arrowStroke: colors.buttonPrimary.active.backgroundColor,
};

export default Logo;
