import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Spirotec Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
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
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello there! How can I assist you with Spirotec services today?";
    } else if (input.includes('earned wage') || input.includes('ewa')) {
      return "Earned Wage Access (EWA) allows employees to withdraw part of their already earned salary before payday. It's a great way to improve financial wellness!";
    } else if (input.includes('how it works') || input.includes('work')) {
      return "Spirotec integrates with your payroll system. Employees can access earned wages through USSD (*123#), mobile app, or employer dashboard. Repayments are automatically deducted on payday.";
    } else if (input.includes('cost') || input.includes('fee')) {
      return "For employers: No cost! It's completely free. For employees: Small monthly flat fee plus 5% per transaction (all fees are shown before confirming).";
    } else if (input.includes('contact') || input.includes('help')) {
      return "You can reach us at:\nWhatsApp: +263 784 959 399\nPhone: +263 784 959 399\nEmail: info@spirotec.co.zw\nBusiness Hours: Mon–Sat, 8am–6pm";
    } else if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "I'm sorry, I didn't understand that. Could you please rephrase your question? You can ask about Earned Wage Access, how it works, fees, or contact information.";
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
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <button onClick={toggleChat} className="chatbot-toggle">
          <img src="/assets/chatbot-icon.png" alt="Chat" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;