import * as THREE from "three";

const useScene = ({ WIDTH, HEIGHT, VIEW_ANGLE, ASPECT, NEAR, FAR }) => {
  let renderer;
  let camera;
  let scene;
  let pointLight;
  let itemsOfScene = [];

  const setRenderer = () => {
    renderer = new THREE.WebGLRenderer();

    // Start the renderer.
    renderer.setSize(WIDTH, HEIGHT);
  };

  const getRenderer = () => renderer;

  const setCamera = () => {
    camera = new THREE.PerspectiveCamera(
      VIEW_ANGLE,
      ASPECT,
      NEAR,
      FAR
    );
  }

  const setScene = () => scene = new THREE.Scene();

  const setAllScene = () => {
    setRenderer();
    setCamera();
    setScene();
  };

  const addPointLightsToScene = (POINT_LIGHT) => {
    const { color, x, y, z } = POINT_LIGHT;
    // create a point light
    pointLight = new THREE.PointLight(color);

    // set its position
    pointLight.position.x = x;
    pointLight.position.y = y;
    pointLight.position.z = z;

    // add to the scene
    scene.add(pointLight);
  }

  const addItemsToScene = (items) => {
    items.forEach(child => {
      itemsOfScene.push(child);
      scene.add(child)
    })
  }

  const render = () => {
    requestAnimationFrame(render);

    itemsOfScene.forEach(child => {
      child.rotation.x += 0.01;
      child.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
  }

  const update = () => {
    requestAnimationFrame(render);
  }

  return {
    setAllScene,
    getRenderer,
    addPointLightsToScene,
    addItemsToScene,
    render,
    update
  }
};

export default useScene;