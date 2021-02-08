import React, {Component} from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  onIncrementButtonClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('LifeCycleSample.getDerivedStateFromProps() called');
    if (nextProps.color !== prevState.color) {
      return {color: nextProps.color};
    }
    return null;
  }

  render() {
    const style = {
      color: this.props.color
    };
    return <div>
      <div style={style}>
        <p>child.number: {this.state.number}</p>
        <p>child.color: {this.state.color}</p>
      </div>
      <button onClick={this.onIncrementButtonClick}>Increment</button>
    </div>
  }
}

export default LifeCycleSample;
