import React from 'react';
import '../styles.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>My name is Will, and I've been a basketball fan and casual player since I was five years old! This app was built with fans in mind to keep track on all of the game stats as we approach the 2023 NBA Playoffs.</p>
      <img className="about-image" src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80" alt="About Page Banner"/>
    </div>
  );
}