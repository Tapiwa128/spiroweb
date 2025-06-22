import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading Spirotec Platform...</p>
        </div>
      ) : (
        <div className="App">
          <Header className={scrolled ? 'scrolled' : ''} />
          <Hero />
          <ScreenshotShowcase />
          <FAQSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;