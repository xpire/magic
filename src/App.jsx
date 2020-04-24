import React from 'react';
import logo from './logo.svg';
import './App.css';

import ParallaxLayer from './components/parallax/ParallaxLayer';
import ParallaxContainer from './components/parallax/ParallaxContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParallaxContainer
        layerArray={[
          {
            layer: <img src={logo} className="App-logo" alt="logo" />, 
            transform: (x, y) => `translate3d(${x / -10}px,${y / -10}px,0)`
          }, 
          { 
            layer: <img src={logo} className="App-logo" alt="logo" />, 
            transform: (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
          }
        ]}
        />
      </header>
      <header className="App-header">
        <ParallaxContainer
        layerArray={[
          {
            layer: <img src={logo} className="App-logo" alt="logo" />, 
            transform: (x, y) => `translate3d(${x / -100}px,${y / -10}px,0)`
          }, 
          { 
            layer: <img src={logo} className="App-logo" alt="logo" />, 
            transform: (x, y) => `translate3d(${x / 10}px,${y / 100}px,0)`
          }
        ]}
        />
      </header>
    </div>
  );
}

export default App;
