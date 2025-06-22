import React, { useState } from 'react';
import './FAQCategory.css';

const FAQCategory = ({ title, faqs, icon }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-category">
      <h3>{icon} {title}</h3>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{faq.question}</span>
            <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQCategory;
