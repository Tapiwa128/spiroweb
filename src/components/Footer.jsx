// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        
        <div className="contact-info">
          <p>Email: support@spirotec.co.zw</p>
          <p>WhatsApp: +263789276360</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} Spirotec Financial Services Inc. — Empowering workers through early access to earned wages.
        </p>
      </div>
    </footer>
  );
};

export default Footer;