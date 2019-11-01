import React, { useEffect } from 'react';
import useScene from './useScene';
import config from './config';

const Scene = ({ items }) => {
  const { 
    setAllScene,
    getRenderer,
    addPointLightsToScene,
    addItemsToScene,
    render,

  } = useScene(config);

  // Get the DOM element to attach to
  const container = React.createRef();

  // Create a WebGL renderer, camera
  // and a scene
  setAllScene();

  const renderer = getRenderer();

  useEffect(() => {
    // Attach the renderer-supplied
    // DOM element.
    container.current && container.current.appendChild(renderer.domElement);
  }, [container, renderer]);

  // create a point light and add to the scene
  addPointLightsToScene(config.POINT_LIGHT);

  // add Items to the scene
  addItemsToScene(items);
  
  // Draw!
  render();

  return <div ref={container} />
};

export default Scene;