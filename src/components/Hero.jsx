// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-text">
        <h1>Your Money When You Need It</h1>
        <p>
          Pay day is once a month, but life happens daily.
        </p>
        <div className="hero-buttons">
          <a href="#user-form" className="btn primary-btn">I Want Spirotec at My Job</a>
          <a href="#employer-form" className="btn secondary-btn">I'm an Employer</a>
        </div>
        <div className="hero-taglines">
          <p>You work every day, why not get paid every day?</p>
          <p>Financial freedom is the best thing you can do for yourself</p>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/hero-illustration.png" alt="Person smiling with money on phone" />
      </div>
    </section>
  );
};

export default Hero;