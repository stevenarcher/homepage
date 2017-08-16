/**
 * Left Icon
 * ---------
 */

import React from 'react';
import * as commonProps from './common/props';
import ArrowIcon from './common/ArrowIcon';

function LeftIcon(props) {
	return <ArrowIcon color={props.color} width={props.width} percent={props.percent} rotation={45} />;
}

LeftIcon.propTypes = commonProps.propTypes;

LeftIcon.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: 22,
});

export default LeftIcon;
