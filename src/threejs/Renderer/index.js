/**
 * Renderer Component
 * ------------------
 * This create and renders a web GL element using Three.js
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import { Canvas } from './styles';
import UpdateLoop from '../../utils/UpdateLoop';

/**
 * Renderer
 * @extends {Component}
 * @implements {IUpdatable}
 */
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

	/**
	 * Create
	 */
	create = () => {
		const { width, height } = this.props;

		const canvas = ReactDOM.findDOMNode(this);

		// Renderer
		this.renderer = new THREE.WebGLRenderer({ alpha: false, canvas });
		this.renderer.setClearColor(this.props.backgroundColor);
		this.renderer.shadowMap.enabled = true;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(width, height);

		// Scene
		this.scene = new THREE.Scene();

		this.props.children.map(child => {
			this.scene.add(child);
		});

		// Camera
		this.camera = new THREE.PerspectiveCamera(42, width / height, 0.25, 10000);
		this.camera.position.set(0, 0.016, 6.2);
		this.camera.rotation.set(0, 0, 0);

		UpdateLoop.add(this);
		UpdateLoop.start();
	};

	/**
	 * Destroy
	 */
	destroy = () => {
		UpdateLoop.remove(this);

		//this.renderer.destroy();
	};

	/**
	 * Update
	 * @param {number} delta - the time since the last update
	 */
	update = delta => {
		this.renderer.render(this.scene, this.camera);
	};

	/**
	 * Render
	 */
	render() {
		return <Canvas />;
	}
}

Renderer.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	backgroundColor: PropTypes.number,
};

Renderer.defaultProps = {
	backgroundColor: 0xfcfcf2,
};

export default Renderer;
