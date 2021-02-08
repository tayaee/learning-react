import './App.css';
import * as React from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  state = {
    color: '#000000'
  };

  getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  onButtonClick = () => {
    console.log('1. App.onButtonClick called');
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
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
