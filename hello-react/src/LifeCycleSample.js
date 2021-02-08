import React, {Component} from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
  };

  onIncrementButtonClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  };

  render() {
    const style = {
      color: this.props.color
    };
    return <div>
      <div style={style}>
        <p>child.number: {this.state.number}</p>
        <p>props.color: {this.props.color}</p>
      </div>
      <button onClick={this.onIncrementButtonClick}>Increment</button>
    </div>
  }
}

export default LifeCycleSample;
