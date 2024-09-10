import React, { useEffect, useRef, useState } from 'react';

const InputSection = ({ sendMessage }) => {
  const [inputText, setInputText] = useState('');
  const inputButton = useRef(0);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      inputButton.current.click();
    }
  }

  

  useEffect(()=>{
    
  }, []);

  return (
    <div id="input-section">
      <input
        id="input"
        type="text"
        placeholder="Type a message"
        value={inputText}
        onChange={e=> setInputText(e.target.value)}
        onKeyDown={handleEnter}
        autoComplete="off"
        autoFocus
      />
      <button ref={inputButton} className="send" onClick={handleSendMessage} >
        <div className="circle">
          <i className="zmdi zmdi-mail-send"></i>
        </div>
      </button>
    </div>
  );
};

export default InputSection;
