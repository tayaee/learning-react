import './App.css';
import * as React from "react";
import ScrollBox from "./ScrollBox";

class App extends React.Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>Scroll Down</button>
      </div>
    )
  }
}

export default App;
