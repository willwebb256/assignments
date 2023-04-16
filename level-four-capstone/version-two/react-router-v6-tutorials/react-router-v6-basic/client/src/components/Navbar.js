import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>NBA Game Tracker</h1>
      <div className="navbar-links">
        <Link to="/">Scores</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/standings">Standings</Link>
      </div>
    </nav>
  );
}