import React from 'react';
import ThemeSelector from './ThemeSelector';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center p-2 mt-8">
      <p className="text-sm text-gray-600">
        <a href="https://github.com/joachimth/myholidayapp" className="text-blue-600 hover:underline">myHolidayApp</a> by <a href="https://github.com/joachimth" className="text-blue-600 hover:underline">joachimth</a> | {currentYear}
      </p>
      <div className="mt-2">
        <ThemeSelector />
      </div>
    </footer>
  );
};

export default Footer;