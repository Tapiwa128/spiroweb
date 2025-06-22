import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We’re here to help. Reach out to us through any of the following:</p>
          <ul>
            <li><strong>WhatsApp:</strong> +263 784 959 399</li>
            <li><strong>Phone:</strong> +263 784 959 399</li>
            <li><strong>Email:</strong> info@spirotec.co.zw</li>
            <li><strong>Business Hours:</strong> Mon–Sat, 8am–6pm</li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
