import {Component} from "react/cjs/react.production.min";
import React from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 1,
  };

  render() {
    const {number, fixedNumber} = this.state;
    return (
      <div>
        <h1>V2: {number}</h1>
        <h2>Fixed number: {fixedNumber}</h2>
        <button onClick={() => {
          this.setState((prevState, props) => {
            return {
              number: prevState.number + 1
            }
          }, () => {
            console.log('All setState() finished: ' + this.state.number)
          });
          this.setState((prevState, props) => {
            return {
              number: prevState.number + 1
            }
          }, () => {
            console.log('All setState() finished: ' + this.state.number)
          });
        }}>+2
        </button>
      </div>
    );
  }
}

export default Counter;