import * as THREE from "three";

function Cone() {
  const RADIUS = 5;
  const HEIGHT = 20;
  const RADIAL_SEGMENT = 32;

  const coneGeometry = new THREE.ConeGeometry(RADIUS, HEIGHT, RADIAL_SEGMENT)
  const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

  this.cone = new THREE.Mesh(coneGeometry, coneMaterial);

  return this.cone;
}

export default Cone;