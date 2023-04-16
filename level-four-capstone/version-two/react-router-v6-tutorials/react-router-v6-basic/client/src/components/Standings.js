import React from 'react';
import '../styles.css';

export default function ContactUs() {
  return (
    <div className="standings-container">
      <h2>Team Standings</h2>
    <p> Updated Standings for the 2023 NBA Playoffs:</p>
    <form>
        <label htmlFor="date">Select a Date:</label>
        <input type="date" id="date" name="date" />
        <button type="submit">Submit</button>
      </form>
      <img className="standings-image" src="https://images.unsplash.com/photo-1548311344-5324fa0dbad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Standings Page Banner"/>
    </div>
  );
}

