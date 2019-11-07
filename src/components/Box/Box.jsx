import * as THREE from "three";

function Box() {
    var geometry = new THREE.BoxGeometry( 30, 30, 40 );
    var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    this.cube = new THREE.Mesh( geometry, material );

    // Move the Sphere back in Z so we
    // can see it.
    this.cube.position.x = 90;
    this.cube.position.z = -250;

    return this.cube;
}

export default Box;