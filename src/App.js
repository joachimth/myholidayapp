import React from 'react';
import HolidayList from './components/HolidayList';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';

const App = () => (
  <div>
    <ThemeSelector />
    <HolidayList />
    <Footer />
  </div>
);

export default App;