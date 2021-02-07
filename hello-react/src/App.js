import './App.css';
import * as React from "react";
import {Component} from "react/cjs/react.production.min";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <>
        <div>Use Quick Fix to switch to/from functional/class component.</div>
        <div>IntelliJ add 'import' statements automatically.</div>
        <MyComponent/>
      </>
    )
  }
}

export default App;
