import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ThemeContextProvider } from './themeContext';



ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
