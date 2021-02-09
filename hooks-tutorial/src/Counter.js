import React from "react";
import {useState} from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return <div>
    <p>counter: {value}</p>
    <button onClick={() => setValue(value + 1)}>+1</button>
    <button onClick={() => setValue(value - 1)}>-1</button>
    <p>React {React.version}</p>
  </div>
};

export default Counter;