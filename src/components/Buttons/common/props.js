import PropTypes from 'prop-types';

export const propTypes = {
	onClick: PropTypes.func,
	enabled: PropTypes.bool,
	width: PropTypes.string,
};

export const defaultProps = {
	enabled: true,
	width: 'auto',
};
