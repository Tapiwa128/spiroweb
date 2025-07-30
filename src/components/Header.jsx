// Header.jsx
import React, { useState } from 'react';
import './Header.css';
// Import your logo image (place your logo in the src/assets folder)
import logo from '../assets/logo.png';

const Header = ({ className }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${className || ''}`}>
      <div className="logo">
        <a href="#hero">
          <img
            src={logo}
            alt="Spirotec Logo"
            style={{ height: '61px', width: 'auto', verticalAlign: 'middle' }}
          />
        </a>
      </div>
      <button
        className={`menu-toggle ${menuActive ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav ${menuActive ? 'active' : ''}`}>
        <a href="#hero" onClick={() => setMenuActive(false)}>Home</a>
        <a href="#screenshots" onClick={() => setMenuActive(false)}>How It Works</a>
        <a href="#faq" onClick={() => setMenuActive(false)}>FAQs</a>
        <a href="#contact" onClick={() => setMenuActive(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;