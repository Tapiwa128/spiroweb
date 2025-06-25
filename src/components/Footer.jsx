// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Spirotec Financial Services Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#screenshots">How It Works</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
       
<p className="attribution">
  Software developed and engineered by{' '}
  <a href="https://pakamatech.co.zw" target="_blank" rel="noopener noreferrer">
    Pakama Tech Solutions
  </a>
</p>

      </div>
    </footer>
  );
};

export default Footer;