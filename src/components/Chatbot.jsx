// Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi there! 👋 I'm your Spirotec Assistant. I can help you understand how to access your earned wages or how employers can partner with us. What would you like to know?", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    // Add welcome message when first opened
    if (!isOpen && messages.length === 1) {
      setTimeout(() => {
        setMessages(prev => [...prev, 
          { 
            text: "Try asking me about:\n• How Spirotec works\n• Getting Spirotec at your workplace\n• Employer partnership\n• Fees and costs", 
            sender: 'bot' 
          }
        ]);
      }, 1500);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 800);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! 😊 How can I help you with Spirotec today? You can ask about:\n• Accessing your earned wages\n• Getting Spirotec at your workplace\n• How employers can partner with us";
    } 
    else if (input.includes('earned wage') || input.includes('ewa') || input.includes('access salary') || input.includes('early pay')) {
      return "💰 Earned Wage Access (EWA) lets you withdraw part of salary you've already earned — without waiting for payday!\n\nKey benefits:\n• 0% interest\n• No debt traps\n• Available 24/7\n• Automatic repayment on payday\n\nYour employer needs to partner with Spirotec first. Would you like help requesting Spirotec at your workplace?";
    } 
    else if (input.includes('how it works') || input.includes('work') || input.includes('process')) {
      return "Here's how Spirotec works:\n\n1️⃣ Your employer partners with Spirotec\n2️⃣ You sign up and work as normal\n3️⃣ Access earned wages via USSD (*123#) or app\n4️⃣ Amounts are deducted automatically on payday\n\nIt's that simple! No loans, just your own money when you need it.";
    } 
    else if (input.includes('cost') || input.includes('fee') || input.includes('charge') || input.includes('price')) {
      return "💵 Pricing details:\n\nFor Employers:\n• Completely FREE! No cost to your company\n\nFor Employees:\n• Small monthly flat fee\n• Plus 5% per transaction\n• All fees shown before confirming\n• Much cheaper than payday loans!";
    } 
    else if (input.includes('employer') || input.includes('company') || input.includes('partner') || input.includes('business')) {
      return "🏢 Employer Partnership Info:\n\nBenefits for employers:\n• Improves employee retention\n• Reduces absenteeism\n• Zero cost to your business\n• Easy payroll integration\n\nWant me to connect you with our partnerships team?";
    }
    else if (input.includes('request') || input.includes('get spirotec') || input.includes('my workplace') || input.includes('my job')) {
      return "To get Spirotec at your workplace:\n\n1. Fill out our simple request form\n2. We'll contact your employer\n3. Once they sign up, you can start using Spirotec!\n\nI can direct you to the request form if you'd like!";
    }
    else if (input.includes('contact') || input.includes('help') || input.includes('support') || input.includes('reach')) {
      return "📞 Contact Options:\n\nWhatsApp: +263 784 959 399\nPhone: +263 784 959 399\nEmail: info@spirotec.co.zw\nBusiness Hours: Mon–Sat, 8am–6pm\n\nOr you can fill out the contact form on our website!";
    } 
    else if (input.includes('thank') || input.includes('thanks')) {
      return "You're very welcome! 😊 Is there anything else I can help you with today?";
    } 
    else {
      return "I want to make sure I understand your question. Could you try rephrasing it? Here are some topics I can help with:\n• Earned Wage Access\n• Getting Spirotec at your job\n• Employer partnership\n• Fees and costs\n• Contact information";
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Spirotec Assistant</h3>
            <button onClick={toggleChat} className="close-btn">
              &times;
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Spirotec..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <button onClick={toggleChat} className="chatbot-toggle">
          <img src="/assets/chatbot-icon.png" alt="Chat with Spirotec" />
          <span className="pulse-dot"></span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;