import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Set default theme to bumblebee
document.documentElement.setAttribute('data-theme', 'bumblebee');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);