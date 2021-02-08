import React, {Component} from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  onIncrementButtonClick = () => {
    console.log('LifeCycleSample.onIncrementButtonClick() called: prev ' + this.state.number);
    this.setState({
      number: this.state.number + 1
    })
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    // Do not render when current number is 4, i.e., 5 is not rendered. 1, 2, 3, 4, 6, 7, 8...
    const decision = this.state.number % 10 !== 4;
    console.log('LifeCycleSample.shouldComponentUpdate() called: ' + decision);
    return decision;
  }

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
