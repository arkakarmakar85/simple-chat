import React from 'react';

const MessageSection = ({ messages }) => {
  return (
    <div id="message-section">
      {messages
        ? messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.sender === 'user' ? (
                <span id="user-response">{msg.text}</span>
              ) : (
                <span id="bot-response">{msg.text}</span>
              )}
            </div>
          ))
        : 'No chat has been started.'}
    </div>
  );
};

export default MessageSection;
