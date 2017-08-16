/**
 * Renderer Component
 * ------------------
 * This create and renders a web GL element using Three.js
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class Renderer extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * Did Mount
	 */
	componentDidMount() {
		this.create();
	}

	/**
	 * Will Unmount
	 */
	componentWillUnmount() {
		this.destroy();
	}

	create = () => {
		const { width, height } = this.props;

		const canvas = ReactDOM.findDOMNode(this);

		// Renderer
		this.renderer = new THREE.WebGLRenderer({ alpha: false, canvas });
		this.renderer.setClearColor(0xfcfcf2);
		this.renderer.shadowMap.enabled = true;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(width, height);

		// Scene
		this.scene = new THREE.Scene();

		// Camera
		this.camera = new THREE.PerspectiveCamera(42, width / height, 0.25, 10000);
		this.camera.position.set(0, 0.016, 6.2);
		this.camera.rotation.set(0, 0, 0);

		this.clock = new THREE.Clock();
	};

	destroy = () => {
		// TODO: destroy me plz
	};

	update() {}

	render() {
		return <canvas />;
	}
}

Renderer.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export default Renderer;
