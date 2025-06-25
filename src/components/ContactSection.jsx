import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We're here to help. Reach out to us through any of the following:</p>
          <ul>
            <li>
              <strong>Phone:</strong> 
              <a href="tel:+263784959399"> +263 784 959 399</a>
            </li>
            <li>
              <strong>Email:</strong> 
              <a href="mailto:info@spirotec.co.zw"> info@spirotec.co.zw</a>
            </li>
            <li><strong>Business Hours:</strong> Mon–Sat, 8am–6pm</li>
            <li><strong>Address:</strong> Harare, Zimbabwe</li>
          </ul>
        </div>
        <div className="contact-form">
          <form name="contact" method="POST" data-netlify="true">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              aria-label="Your Name"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required 
              aria-label="Your Email"
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5" 
              required
              aria-label="Your Message"
            ></textarea>
            <button type="submit" className="btn primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;