import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const {name, nickname} = state;

  return <div>
    <input name='name' value={name} placeholder={'Enter name'} onChange={onChange}/>
    <input name='nickname' value={nickname} placeholder={'Enter nickname'} onChange={onChange}/>
    <div>Name: {name}</div>
    <div>Nick Name: {nickname}</div>
  </div>
};

export default Info;
