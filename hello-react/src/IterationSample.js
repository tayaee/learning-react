import React from "react";
import {useState} from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    {id:1, name: 'spring'},
    {id:2, name: 'summer'},
    {id:3, name: 'fall'},
  ]);
  const nameList = names.map((e) => <li key={e.id}>{e.id} {e.name}</li>);
  return (
    <ul>
      {nameList}
    </ul>
  )
};

export default IterationSample;