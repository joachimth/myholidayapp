// src/App.js
import React from 'react';
import HolidayList from './components/HolidayList';
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';

const App = () => (
  <div className="app-container">
    <header className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl">Danske Helligdage</a>
    </header>
    <main className="container mx-auto p-4">
      <ThemeSelector />
      <HolidayList />
    </main>
    <Footer />
  </div>
);

export default App;