import React, {useState} from "react";

function getAverage(numList) {
  console.log('FIXME this is called on each keyboard input');
  if (numList.length === 0) return 0;
  if (numList.length === 1) return numList[0];
  let sum = numList.reduce((a, b) => a + b);
  return sum / numList.length;
}

const Average = () => {
  const [numList, setNumList] = useState([]);
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  const onClick = () => {
    const newNumList = numList.concat(parseInt(value));
    console.log('numList: ', newNumList);
    setNumList(newNumList);
    setValue('');
  };
  let avg = getAverage(numList);
  return <div>
    <input name={value} value={value} onChange={onChange}/>
    <button onClick={onClick}>Add</button>
    <ul>
      {numList.map((e, index) => <li key={index}>{e}</li>)}
    </ul>
    <p>Average: {avg}</p>
  </div>
};

export default Average;