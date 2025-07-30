// Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = ({ className }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${className || ''}`}>
      <div className="logo">Spirotec.</div>
      <button className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
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