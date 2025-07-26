// UserForm.jsx
import React from 'react';
import './Forms.css';

const UserForm = () => {
  return (
    <section id="user-form" className="form-section">
      <div className="form-container">
        <h2>Want Spirotec at your job?</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="employer">Employer Name</label>
            <input type="text" id="employer" required />
          </div>
          <div className="form-group">
            <label htmlFor="job-title">Job Title (Optional)</label>
            <input type="text" id="job-title" />
          </div>
          <button type="submit" className="btn primary-btn">Request Spirotec For My Job</button>
        </form>
      </div>
    </section>
  );
};

export default UserForm;