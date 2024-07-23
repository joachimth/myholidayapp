import React from 'react';
import HolidayList from './components/HolidayList';
import ThemeSelector from './components/ThemeSelector';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ThemeSelector />
      <div className="flex-grow">
        <HolidayList />
      </div>
      <Footer />
    </div>
  );
};

export default App;