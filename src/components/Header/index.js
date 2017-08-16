/**
 * Header Component
 * ----------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './styles';
import Renderer from '../../threejs/Renderer';

class Header extends Component {
	render() {
		return (
			<Wrapper>
				<Title>
					<span>Steven Archer</span>
				</Title>
				<Renderer width={200} height={200} />
			</Wrapper>
		);
	}
}

Header.propTypes = {
	useWebGL: PropTypes.bool,
};

Header.defaultProps = {
	useWebGL: true,
};

export default Header;
