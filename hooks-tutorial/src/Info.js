import React, {useReducer} from "react";

function reducer(state, action) {
  console.log('reducer() called', state, action);
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  console.log('Info() called');
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const {name, nickname} = state;
  const onChange = (e) => dispatch(e.target);
  return <div>
    <input name='name' value={name} placeholder={'Enter name'} onChange={onChange}/>
    <input name='nickname' value={nickname} placeholder={'Enter nickname'} onChange={onChange}/>
    <div>Name: {name}</div>
    <div>Nick Name: {nickname}</div>
  </div>
};

export default Info;
