import React from 'react';
import './App.css';
import Scene from './components/Scene/Scene';
import Sphere from './components/Sphere/Sphere';
import Cone from './components/Cone/Cone';

function App() {
  const sphere = new Sphere();
  const cone = new Cone()

  return (
    <div className="App">
      <Scene items={[sphere, cone]} />
    </div>
  );
}

export default App;
