import './App.css';
import React from "react";
import StyledComponent from "./StyledComponent";

function tagged(...args) {
  console.log(args);
}

function App() {
  console.log(`hello1 ${{foo: 'bar'}} ${() => 'world'}`);
  // hello1 [object Object] () => 'world' <=== lost foo bar.

  tagged`hello2 ${{foo: 'bar'}} ${() => 'world'}`;
  // 0: (3) ["hello2 ", " ", "", raw: Array(3)]
  // 1: {foo: "bar"}  <=== can access to the original expression here.
  // 2: () => 'world'

  return (
    <div>
      <StyledComponent/>
    </div>
  );
}

export default App;
