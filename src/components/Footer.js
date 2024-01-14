import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
  <p><a href="https://github.com/joachimth/MyHolidayApp" className="text-blue-600 hover:underline">myHolidayApp</a> by <a href="https://github.com/joachimth" className="text-blue-600 hover:underline">joachimth</a> | {currentYear}</p>
    <p>Copyright © 2024 - All right reserved</p>
  </aside>
</footer>
    
    
    
  );
};

export default Footer;