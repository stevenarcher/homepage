/**
 * Header Component
 * ----------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './styles';

class Header extends Component {
	render() {
		return (
			<Wrapper>
				<Title>
					<span>Steven Archer</span>
				</Title>
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
