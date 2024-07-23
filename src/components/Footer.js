import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-content text-center p-4 mt-8">
      <p className="text-sm">
        <a href="https://github.com/joachimth/MyHolidayApp" className="text-primary hover:underline">myHolidayApp</a> by <a href="https://github.com/joachimth" className="text-primary hover:underline">joachimth</a> | {currentYear}
      </p>
    </footer>
  );
};

export default Footer;