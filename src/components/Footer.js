import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 text-center p-2 mt-8">
      <p className="text-sm text-base-content">
        <a href="https://github.com/joachimth/myholidayapp" className="link link-primary">myHolidayApp</a> by <a href="https://github.com/joachimth" className="link link-primary">joachimth</a> | {currentYear}
      </p>
    </footer>
  );
};

export default Footer;