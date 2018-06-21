import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import UpdateLoop from "../../utils/UpdateLoop";
import * as material from "../../threejs/Materials";
import * as THREE from "three";
import { colors } from "../../styles";
import Renderer from "../../threejs/Renderer";


class Background extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 200,
      height: 200,
    };
    //this.sphere = new THREE.RingGeometry(2,6,10,10,10,10); //new THREE.SphereGeometry(0.25, 8, 8);
    //this.mesh = new THREE.Mesh(this.sphere, material.plastic);

    const geometry = new THREE.PlaneGeometry( 1, 1 );
    this.mesh = new THREE.Mesh( geometry, material.plastic );

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

  update = delta => {
    this.mesh.rotation.y += 0.02;
  };

  render() {
    const { width, height } = this.props;

    return (
      <Wrapper
        ref={element => {
          this.wrapper = element;
        }}
      >
        <Renderer width={width} height={height} backgroundColor={0}>
          {[this.mesh, this.light]}
        </Renderer>
      </Wrapper>
    );
  }
}

Background.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Background.defaultProps = {
  width: 200,
  height: 200,
};

export default Background;
