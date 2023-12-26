import React from 'react';
import HolidayList from './components/HolidayList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="bg-blue-600 text-white text-xl p-4 text-center">
        Dansk Helligdagskalender
      </header>
      <main className="flex-grow">
        <HolidayList />
      </main>
      <Footer />
    </div>
  );
}

export default App;