/**
 * Common Icon Props
 * -----------------
 */

import PropTypes from 'prop-types';

export const propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

export const defaultProps = {
	width: 20,
	percent: false,
};
