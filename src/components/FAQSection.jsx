// FAQSection.jsx
import React from 'react';
import FAQCategory from './FAQCategory';
import './FAQSection.css';

const FAQSection = () => {
  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      
      <FAQCategory
        icon="👨‍💼"
        title="For Employees"
        faqs={[
          {
            question: "Is there any interest charged?",
            answer: "No, Spirotec charges 0% interest on your earned wage access."
          },
          {
            question: "How quickly can I access my money?",
            answer: "Once your employer is set up, you can access your earned wages instantly via USSD or our mobile app."
          },
          {
            question: "What if my employer isn't partnered with Spirotec?",
            answer: "You can request Spirotec at your workplace using the form above, and we'll reach out to your employer."
          }
        ]}
      />
      
      <FAQCategory
        icon="🏢"
        title="For Employers"
        faqs={[
          {
            question: "Is there any cost to my company?",
            answer: "No, Spirotec is completely free for employers to implement."
          },
          {
            question: "How does repayment work?",
            answer: "The advanced amounts are automatically deducted from employee paychecks on payday."
          },
          {
            question: "How do we get started?",
            answer: "Simply fill out the employer interest form and we'll schedule a demo call with your team."
          }
        ]}
      />
    </section>
  );
};

export default FAQSection;