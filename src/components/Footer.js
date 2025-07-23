import React from 'react';
import './Footer.css'; // We'll add CSS too

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
