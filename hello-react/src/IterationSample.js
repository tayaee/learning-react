import React, {useState} from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {id: 1, name: 'spring'},
    {id: 2, name: 'summer'},
    {id: 3, name: 'fall'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(4);
  const nameList = names.map((e) =>
    <li key={e.id} onDoubleClick={() => onDoubleClickHandler(e.id)}>{e.id} {e.name}</li>
  );
  const onDoubleClickHandler = (id) => {
    const newNames = names.filter(e => e.id !== id);
    setNames(newNames);
  };
  const onInputChange = (e) => {
    setInputText(e.target.value)
  };
  const onButtonClick = () => {
    const newNames = names.concat({id: nextId, name: inputText});
    setNames(newNames);
    setNextId(nextId + 1);
    setInputText('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onButtonClick()
    }
  };
  return (
    <>
      <input value={inputText} onChange={onInputChange} onKeyPress={onKeyPress}/>
      <button onClick={onButtonClick} >Add</button>
      <ul>
        {nameList}
      </ul>
    </>
  )
};

export default IterationSample;