/**
 * Card Component
 * --------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Description } from './styles';


class Card extends Component {
	/**
	 * @constructor
	 * @param props
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * Did Mount
	 */
	componentDidMount() {
	}

	/**
	 * Will Unmount
	 */
	componentWillUnmount() {
	}

	// Render -------------------------------------------------------------------

	/**
	 * Render
	 */
	render() {
		const { width, height, title, description } = this.props;

		return (
			<Wrapper width={width} height={height}>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Wrapper>
		);
	}



}

Card.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

Card.defaultProps = {
	width: '400px',
	height: '280px',
	title: 'Item',
	description: 'Item description'
};

export default Card;
