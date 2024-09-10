import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MessageSection from './MessageSection';
import InputSection from './InputSection';

const ChatBox = () => {
  // Chats now contain an id, name, and messages for each chat
  const [chats, setChats] = useState([]);
  const [activeChatText, setActiveChatText] = useState(false);

  const [activeChatId, setActiveChatId] = useState(1); // Set default active chat to chat with Alice

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  // Function to send a message to the currently active chat
  const sendMessage = (messageText) => {
    setChats(
      chats.map((chat) => {
        if (chat.id === activeChatId) {
          return {
            ...chat,
            updatedAt: Math.floor(Date.now() / 1000),
            messages: [...chat.messages, { text: messageText, sender: 'user' }],
          };
        }
        return chat;
      })
    );
  };

  // Function to create a new chat with a sample question
  const createNewChat = () => {
    const newChatId = Math.floor(Date.now() / 1000);

    const newChat = {
      id: newChatId,
      updatedAt: Math.floor(Date.now() / 1000),
      name: `Chat ${chats.length + 1}`,
      messages: [{ text: 'This will be a sample question?', sender: 'bot' }], // Sample question from the bot
    };
    setChats([...chats, newChat]);
    setActiveChatId(newChatId); // Make the new chat the active one
    handleChatBox(); // It will activate the chat message box
  };

  // Function to switch to a different chat
  const switchChat = (chatId) => {
    setActiveChatId(chatId);
  };

  const handleChatBox = () => {
    setActiveChatText(true);
  };

  return (
    <div className="container">
      <Sidebar
        chats={chats}
        createNewChat={createNewChat}
        switchChat={switchChat}
      />
      <div className="card">
        <div id="header">
          <h1>GENAI Chat Client!</h1>
        </div>

        <MessageSection messages={activeChat?.messages} />
        {activeChatText && <InputSection sendMessage={sendMessage} />}
      </div>
    </div>
  );
};

export default ChatBox;
