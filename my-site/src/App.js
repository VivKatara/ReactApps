import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-name">
        <Title name="Vivek Katara" />
      </div>
      <div className = "App-description">
        <Description/>
      </div>
    </div>
  );
}

export default App;
