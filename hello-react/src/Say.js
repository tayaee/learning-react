import React, {useState} from "react";

function Say() {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Entered');

  function onClickLeave() {
    setMessage('Left');
  }

  return <div>
    <button onClick={onClickEnter}>Enter</button>
    <button onClick={onClickLeave}>Leave</button>
    <div>{message}</div>
  </div>
}

export default Say;