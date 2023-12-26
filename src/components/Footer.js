import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center p-4 mt-8">
      <p className="text-sm text-gray-600">
        Repo: <a href="https://github.com/joachimth/MyHolidayApp" className="text-blue-600 hover:underline">myHolidayApp</a> by <a href="https://github.com/joachimth" className="text-blue-600 hover:underline">joachimth</a> | Senest Opdateret: {currentYear}
      </p>
    </footer>
  );
};

export default Footer;