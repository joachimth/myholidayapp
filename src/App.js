import React from 'react';
import HolidayList from './components/HolidayList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base-200 text-base-content">
      <header className="bg-primary text-primary-content p-4 shadow-md">
        <h1 className="text-center text-4xl">My Holiday App</h1>
      </header>
      <main className="flex-grow">
        <HolidayList />
      </main>
      <Footer />
    </div>
  );
}

export default App;