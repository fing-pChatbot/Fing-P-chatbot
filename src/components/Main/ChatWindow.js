import React, { useState } from 'react';
import './ChatWindow.css';
import profileImage from '../../images/짱구.png'; // 프로필 이미지 파일 경로
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages, onSendMessage, currentMode, isToggleOn, onModeToggle }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="profile-name">Finger Princess</span>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="welcome-message">
            <h2>Welcome To Fing-P Chatbot</h2>
            <br />
            <p>핑프챗봇은 학교 생활에 대한 여러 정보를 알고 있습니다!</p>
            <p>무엇이든 물어봐주세요.</p>
          </div>
        )}
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="질문을 입력하세요"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="send-button" onClick={handleSend}>
        <span class="material-symbols-outlined">
send
</span>
        </button>
        <div className="mode-toggle-container">
          <span>실시간 검색</span>
          <Switch
            checked={isToggleOn}
            onChange={onModeToggle}
            onColor="#3f704d"
            offColor="#888"
            handleDiameter={22}
            className="custom-switch"
          />
        </div>
      </div>
    </div>
  );
};

const Switch = ({ checked, onChange, onColor, offColor, handleDiameter, activeBoxShadow, boxShadow, className }) => {
  const switchStyle = {
    display: 'inline-block',
    width: '50px',
    height: '24px',
    backgroundColor: checked ? onColor : offColor,
    borderRadius: '12px',
    position: 'relative',
    boxShadow: checked ? activeBoxShadow : boxShadow,
    cursor: 'pointer',
  };

  const handleStyle = {
    width: `${handleDiameter}px`,
    height: `${handleDiameter}px`,
    backgroundColor: 'white',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: checked ? `calc(100% - ${handleDiameter}px)` : '0%',
    transform: 'translateY(-50%)',
    transition: 'left 0.2s',
  };

  return (
    <div style={switchStyle} onClick={onChange} className={className}>
      <div style={handleStyle}></div>
    </div>
  );
};

export default ChatWindow;
