import './App.css';
import * as React from "react";
import LifeCycleSample from "./LifeCycleSample";

class App extends React.Component {
  state = {
    color: '#000000'
  };

  getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  onButtonClick = () => {
    this.setState({
      color: this.getRandomColor()
    })
  };

  render() {
    return (
      <div>
        {/*Maximum update depth exceeded: Pass function instead of invocation */}
        <button onClick={() => this.onButtonClick()}>New Color</button>
        <p>parent.color: {this.state.color}</p>
        <LifeCycleSample color={this.state.color}/>
      </div>
    )
  }
}

export default App;
