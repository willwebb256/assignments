import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>React Roto Router</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
}
