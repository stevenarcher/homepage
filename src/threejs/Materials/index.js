import * as THREE from 'three';

export const plastic = new THREE.MeshPhongMaterial({
	color: new THREE.Color(1, 1, 1),
	specular: new THREE.Color(0.6666, 0.6666, 0.6666),
	emissive: new THREE.Color(0, 0, 0),
	emissiveIntensity: 1,
	morphNormals: false,
	morphTargets: false,
	polygonOffset: false,
	polygonOffsetFactor: 0,
	polygonOffsetUnits: 0,
	opacity: 1,
	reflectivity: 0.2,
	shading: THREE.SmoothShading,
	shininess: 20,
	wireframe: false,
	visible: true,
	transparent: false,
	vertexColors: 0,
});
