import React from 'react';
import HolidayList from './components/HolidayList';
import Footer from './components/Footer';

const App = () => (
  <div>
    <header className="text-center py-4 bg-gray-100 shadow-md">
      <h1 className="text-4xl font-bold text-gray-800">Danske Helligdage</h1>
    </header>
    <HolidayList />
    <Footer />
  </div>
);

export default App;