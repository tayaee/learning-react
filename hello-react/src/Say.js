import React, {useState} from "react";

function Say() {
  const [message, setMessage] = useState('None');
  const [color, setColor] = useState('black');
  const onClickEnter = () => setMessage('Entered');
  const onClickLeave = () => setMessage('Left');

  return <div>
    <button onClick={onClickEnter}>Enter</button>
    <button onClick={onClickLeave}>Leave</button>
    <h1 style={{color: color}}> {message}</h1>
    <button style={{color: 'red'}} onClick={() => setColor('red')}>Red</button>
    <button style={{color: 'green'}} onClick={() => setColor('green')}>Green</button>
    <button style={{color: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
  </div>
}

export default Say;