import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-text">
        <h1>On-Demand Pay for the Modern Workforce</h1>
        <p>
          Empower your employees with instant access to their earned wages. Spirotec boosts morale,
          productivity, and retention — all at zero cost to your business.
        </p>
        <div className="hero-buttons">
          <a href="#screenshots" className="btn primary-btn">Explore Now</a>
          <a href="#contact" className="btn secondary-btn">Request Demo</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/screenshot.png" alt="screenshot" />
      </div>
    </section>
  );
};

export default Hero;
