import React, {useState} from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const onNameChange = (e) => setName(e.target.value);
  const onNicknameChange = (e) => setNickname(e.target.value);
  return <div>
    <input value={name} placeholder={'Enter name'} onChange={onNameChange}/>
    <input value={nickname} placeholder={'Enter nickname'} onChange={onNicknameChange}/>
    <div>Name: {name}</div>
    <div>Nick Name: {nickname}</div>
  </div>
};

export default Info;