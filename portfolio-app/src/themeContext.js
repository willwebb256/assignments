import { useState } from 'react';
import React from 'react';


export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = { theme, toggleTheme, setTheme }; // include setTheme in value

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};





// import React, { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };






// import React, { useState, useEffect } from 'react';

// export const ThemeContext = React.createContext();

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const root = document.documentElement;
//     root.style.setProperty('--background-color', theme === 'light' ? '#fff' : '#222');
//     root.style.setProperty('--text-color', theme === 'light' ? '#000' : '#fff');
//     root.style.setProperty('--highlight-color', theme === 'light' ? '#f0f' : '#0ff');
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };






// import React, { useState } from 'react';

// export const ThemeContext = React.createContext();

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };





// import React, { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };






