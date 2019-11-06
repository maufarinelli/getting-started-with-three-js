import React from 'react';
import './App.css';
import Scene from './components/Scene/Scene';
import Sphere from './components/Sphere/Sphere';
import Cone from './components/Cone/Cone';
import Box from './components/Box/Box';

function App() {
  const sphere = new Sphere();
  const cone = new Cone();
  const box = new Box();

  return (
    <div className="App">
      <Scene items={[box, sphere, cone]} />
    </div>
  );
}

export default App;
