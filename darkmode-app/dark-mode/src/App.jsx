import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Maine from './Maine.jsx';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Maine />
      <Footer />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default App;

