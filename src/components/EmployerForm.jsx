// EmployerForm.jsx
import React from 'react';
import './Forms.css';

const EmployerForm = () => {
  return (
    <section id="employer-form" className="form-section alt-bg">
      <div className="form-container">
        <h2>Bring Financial Wellness to Your Team</h2>
        <p className="subtitle">
          Help your employees avoid payday loans and live better — at no extra cost to you.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input type="text" id="company" required />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input type="text" id="position" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="meeting-time">Preferred Meeting Date/Time</label>
            <input type="datetime-local" id="meeting-time" />
          </div>
          <button type="submit" className="btn primary-btn">Book a Meeting With Spirotec</button>
        </form>
      </div>
    </section>
  );
};

export default EmployerForm;