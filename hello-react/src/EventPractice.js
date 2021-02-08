import React, {useState} from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  // FIXME: TypeError: form is not iterable => Use {, } instead of [, ].
  const {username, message} = form;
  const onChange = (e) => {
    console.log(e.target.name + ': ' + e.target.value)
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm)
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({username: '', message: ''});
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>Event Test</h1>
      <input type='text' name='username' value={username} placeholder='Enter username' onChange={onChange}/>
      <input type='text' name='message' value={message} placeholder='Enter message' onChange={onChange}
             onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  )
};

export default EventPractice;