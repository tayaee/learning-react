import React from "react";

const IterationSample = () => {
  const names = ['spring', 'summer', 'fall', 'winter'];
  // index.js:1 Warning: Each child in a list should have a unique "key" prop.
  const nameList = names.map((e, index) => <li key={index}>{index} {e}</li>);
  return (
    <ul>
      {nameList}
    </ul>
  )
};

export default IterationSample;