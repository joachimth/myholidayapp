import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content text-center p-4 mt-8">
      <p className="text-sm">
        <a href="https://github.com/joachimth/MyHolidayApp" className="link link-hover">myHolidayApp</a> by <a href="https://github.com/joachimth" className="link link-hover">joachimth</a> | {currentYear}
      </p>
    </footer>
  );
};

export default Footer;