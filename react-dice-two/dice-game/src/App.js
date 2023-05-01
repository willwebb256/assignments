import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [diceRoll, setDiceRoll] = useState(1);

  function handleDiceRoll() {
    setDiceRoll(Math.floor(Math.random() * 6) + 1);
    console.log("Dice rolled!"); // callback function
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={handleDiceRoll}>
            Roll Dice
          </button>
          <br />
          <br />
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
