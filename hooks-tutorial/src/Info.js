import React, {useState} from "react";
import {useEffect} from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('useEffect() called. The same was as componentDidMount/componentDidUpdate in class component.')
    console.log('name: ' + name + ', nickname: ' + nickname);
  });
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