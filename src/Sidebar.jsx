import React, { useEffect, useState } from 'react';

const Sidebar = ({ chats, createNewChat, switchChat }) => {
  const [sortedChat, setSortedChat] = useState();
  useEffect(() => {
    setSortedChat(() => {
      return chats.sort((a, b) => b.updatedAt - a.updatedAt);
    });
  }, [chats]);
  return (
    <div className="sidebar">
      <h2>Previous Chats</h2>
      <ul id="chat-list">
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => switchChat(chat.id)}>
            {chat.name}
          </li>
        ))}
      </ul>
      <button className="create-chat-btn" onClick={createNewChat}>
        Create New Chat
      </button>
    </div>
  );
};

export default Sidebar;
