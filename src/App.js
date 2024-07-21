import React from 'react';
import './App.css';

function App() {
  const holidays = [
    { title: 'New Year\'s Day', date: '2023-01-01' },
    { title: 'Christmas Day', date: '2023-12-25' },
    // Tilføj flere helligdage her
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Holiday App</h1>
      </header>
      <main className="App-main">
        <h2>Welcome!</h2>
        <button className="App-button">Click Me</button>
        <div className="holiday-list">
          {holidays.length > 0 ? (
            holidays.map((holiday, index) => (
              <div key={index} className="holiday-list-item">
                <div className="holiday-item-title">{holiday.title}</div>
                <div className="holiday-item-date">{holiday.date}</div>
              </div>
            ))
          ) : (
            <div className="holiday-list-empty">No holidays available</div>
          )}
        </div>
      </main>
      <footer className="App-footer">
        <p>Footer Information</p>
      </footer>
    </div>
  );
}

export default App;