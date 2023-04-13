import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

