import React from 'react';
import FAQCategory from './FAQCategory';
import './FAQSection.css';

const FAQSection = () => {
  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-subtitle">Here’s everything you need to know.</p>

      <FAQCategory
        icon="🏢"
        title="For Employers"
        faqs={[
          {
            question: "What is Spirotec Financial Services Inc.?",
            answer: "Spirotec is a financial services platform that allows your employees to access their earned wages before payday — increasing satisfaction, reducing absenteeism, and enhancing productivity."
          },
          {
            question: "How does it benefit my company?",
            answer: "It’s free for your business, improves retention, reduces payroll loan requests, and positions you as a modern employer."
          },
          {
            question: "Is there any risk to my business?",
            answer: "No. Advances are disbursed based on confirmed payroll data, and repayments are automated by Spirotec."
          },
          {
            question: "How do we get started?",
            answer: "We onboard your company with a simple agreement. You upload payroll data or integrate, and employees can start accessing earnings instantly."
          },
          {
            question: "What control do we have as an employer?",
            answer: "You manage eligibility, approve requests, and view insights through our employer dashboard."
          }
        ]}
      />

      <FAQCategory
        icon="👨‍💼"
        title="For Employees"
        faqs={[
          {
            question: "What is Earned Wage Access (EWA)?",
            answer: "EWA lets you withdraw part of the salary you've already worked for — without waiting until payday."
          },
          {
            question: "How do I access my money?",
            answer: "Dial *123# and follow the prompts. Funds are sent to your EcoCash, OneMoney, or bank account instantly."
          },
          {
            question: "How much can I access?",
            answer: "Up to 60% of your earned wages, based on employer-set limits and days worked."
          },
          {
            question: "Is there a fee?",
            answer: "Yes — a small monthly flat fee plus 5% per transaction. All fees are shown before confirming."
          },
          {
            question: "Do I need a smartphone?",
            answer: "No. Any phone will work. Our service uses USSD and SMS."
          },
          {
            question: "What happens on payday?",
            answer: "The amount you advanced, plus fees, is deducted from your salary before it’s paid to you."
          }
        ]}
      />

      <FAQCategory
        icon="🔐"
        title="Security & Trust"
        faqs={[
          {
            question: "Is my information safe?",
            answer: "Yes. We use bank-grade encryption, secure integrations, and comply with Zimbabwe’s data protection laws."
          },
          {
            question: "Who provides the funds?",
            answer: "Spirotec funds the advances. Employers carry no risk or financial burden."
          },
          {
            question: "What if I change jobs?",
            answer: "Access ends with your job. Outstanding balances are settled from your final paycheck."
          }
        ]}
      />
    </section>
  );
};

export default FAQSection;
