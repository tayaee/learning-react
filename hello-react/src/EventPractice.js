import React from "react";
import {useState} from "react";

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div>
      <h1>Event Test</h1>
      <input type='text'
             name='username'
             value={username}
             placeholder='Enter username'
             onChange={handleUsernameChange}/>
      <input type='text'
             name='message'
             value={message}
             placeholder='Enter message'
             onChange={handleMessageChange}
             onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
};

export default EventPractice;