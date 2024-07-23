import React from 'react';
import HolidayList from './components/HolidayList';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ThemeSelector />
      <main className="flex-grow">
        <HolidayList />
      </main>
      <Footer />
    </div>
  );
};

export default App;