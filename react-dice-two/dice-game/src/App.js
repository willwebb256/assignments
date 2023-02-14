import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

const [diceRoll, setDiceRoll] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <button onClick={() => setDiceRoll(Math.floor(Math.random() * 6) + 1)}>
            Roll Dice
          </button>
          <br></br>
          <br></br>
          Current Roll: {diceRoll}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
