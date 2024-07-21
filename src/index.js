import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';

// Set default theme to bumblebee
document.documentElement.setAttribute('data-theme', 'bumblebee');

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer>
      <ThemeSelector />
    </Footer>
  </React.StrictMode>,
  document.getElementById('root')
);