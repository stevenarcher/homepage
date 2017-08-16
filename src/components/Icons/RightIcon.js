/**
 * Right Icon
 * ---------
 */

import React from 'react';
import * as commonProps from './common/props';
import ArrowIcon from './common/ArrowIcon';

function RightIcon(props) {
	return <ArrowIcon color={props.color} width={props.width} percent={props.percent} rotation={225} />;
}

RightIcon.propTypes = commonProps.propTypes;

RightIcon.defaultProps = Object.assign({}, commonProps.defaultProps, {
	width: 22,
});

export default RightIcon;
