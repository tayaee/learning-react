import React, {useState} from "react";
import {useMemo} from "react";

function getAverage(numList) {
  console.log('This is optimized now.');
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
  let avg = useMemo(() => getAverage(numList), [numList]);
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