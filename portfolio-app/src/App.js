import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { ThemeContextProvider } from "./components/themeContext";
import { Navbar, Footer, Main } from './components';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Main />
      <Footer />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
