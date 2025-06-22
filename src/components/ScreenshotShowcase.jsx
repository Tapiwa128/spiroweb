import React from 'react';
import './ScreenshotShowcase.css';

const ScreenshotShowcase = () => {
  const screenshots = [
    { src: '/assets/screenshots/WhatsApp Image 2025-06-18 at 17.19.00_6b25f90e.jpg', caption: 'USSD Access (*123#)' },
    { src: '/assets/screenshots/WhatsApp Image 2025-06-05 at 15.09.14_3d8eb924.jpg', caption: 'Employer Dashboard' },
    { src: '/assets/screenshots/WhatsApp Image 2025-06-05 at 15.09.15_e66e06f6.jpg', caption: 'Advance Request UI' },
    { src: '/assets/screenshots/WhatsApp Image 2025-06-05 at 15.09.15_0325c1c4.jpg', caption: 'Automatic Repayment Summary' },
  ];

  return (
    <section id="screenshots" className="screenshot-section">
      <h2>How It Works</h2>
      <p className="subtitle">A quick look at our user-friendly platform</p>
      <div className="screenshot-grid">
        {screenshots.map((shot, index) => (
          <div key={index} className="screenshot-card">
            <img src={shot.src} alt={shot.caption} />
            <p>{shot.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
