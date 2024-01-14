import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Hvis du vil starte måling af ydeevne i din app, kan du passere en funktion
// til log resultaterne (for eksempel: reportWebVitals(console.log))
reportWebVitals(console.log);
