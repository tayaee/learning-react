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
        <MyComponent name="React"/>
        <MyComponent/>
        <MyComponent>Children Text</MyComponent>
        <MyComponent name={3}/>
        {/*index.js:1 Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `MyComponent`, expected `string`.*/}
        {/*at MyComponent (http://localhost:3000/static/js/main.chunk.js:308:3)*/}
        {/*at App (http://localhost:3000/main.c558e9edfd4bd8c2b638.hot-update.js:32:1)*/}
      </>
    )
  }
}

export default App;
