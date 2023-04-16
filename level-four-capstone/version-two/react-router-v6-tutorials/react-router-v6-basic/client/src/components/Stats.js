import React from 'react';
import '../styles.css';

export default function Stats() {
  return (
    <div className="stats-container">
      <h2>Player Stats</h2>
      <p>This is where you can view top ten player stats per game by date.</p>
      <form>
        <label htmlFor="date">Select a Date:</label>
        <input type="date" id="date" name="date" />
        <button type="submit">Submit</button>
      </form>
      <img className="stats-image" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80" alt="Stats Page Banner"/>
    </div>
  );
}