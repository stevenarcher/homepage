/**
 * Header Component
 * ----------------
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import { Wrapper, Title } from './styles';
import * as material from '../../threejs/Materials';
import * as THREE from 'three';
import Renderer from '../../threejs/Renderer';
import UpdateLoop from '../../utils/UpdateLoop';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 200,
			height: 200,
		};
		this.sphere = new THREE.RingGeometry(2,6,10,10,10,10); //new THREE.SphereGeometry(0.25, 8, 8);
		this.mesh = new THREE.Mesh(this.sphere, material.plastic);

		this.light = new THREE.DirectionalLight(0xffedc3, 0.6);
		this.light.position.set(0, 2, 1);
	}

	componentDidMount() {
		this.setState({ width: this.wrapper.width });
		UpdateLoop.add(this);
	}

	componentWillUnmount() {
		UpdateLoop.remove(this);
	}

	/**
	 * Update
	 * @param {number} delta - the time since the last update
	 */
	update = delta => {
		this.mesh.rotation.z += 0.02;
	};

	render() {
		return (
			<Wrapper
				ref={element => {
					this.wrapper = element;
				}}
			>
				<Renderer width={500} height={90} backgroundColor={colors.base.background}>
					{[this.mesh, this.light]}
				</Renderer>
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
