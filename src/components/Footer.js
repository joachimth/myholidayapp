import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-center text-sm py-3">
      <p>Repo: <a href="https://github.com/joachimth/MyHolidayApp" className="text-blue-600 hover:text-blue-800">myHolidayApp</a> by <a href="https://github.com/joachimth" className="text-blue-600 hover:text-blue-800">joachimth</a> | Senest Opdateret: {currentYear}</p>
    </footer>
  );
};

export default Footer;
