import React from 'react';
import HolidayList from './components/HolidayList';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ThemeSelector />
      <div className="mb-8"> {/* Juster margin i bunden her */}
      <HolidayList />
      <Footer />
    </div>
  );
}

export default App;