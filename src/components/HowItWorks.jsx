// HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      title: "Your employer partners with Spirotec",
      description: "Your employer signs up with Spirotec to allow salary access.",
      icon: "🏢"
    },
    {
      title: "You sign up with Spirotec, work and earn your wages",
      description: "As you work daily, your earnings accumulate.",
      icon: "👨‍💼"
    },
    {
      title: "Access your earnings instantly via USSD or app",
      description: "Withdraw what you've already earned – anytime.",
      icon: "📱"
    },
    {
      title: "Get paid as usual on payday",
      description: "Your advances are deducted automatically, no stress.",
      icon: "💰"
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;