import React, {Component} from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  onIncrementButtonClick = () => {
    console.log('2. LifeCycleSample.onIncrementButtonClick() called: prev ' + this.state.number);
    this.setState({
      number: this.state.number + 1
    })
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    // Do not render when current number is 4, i.e., 5 is not rendered.
    const decision = this.state.number % 10 !== 4;
    console.log('4. LifeCycleSample.shouldComponentUpdate() called: ' + decision);
    return decision;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('6. LifeCycleSample.getSnapshotBeforeUpdate() called');
    if (prevProps.color !== this.props.color) {
      console.log('Saving color ' + this.myRef.style.color);
      return this.myRef.style.color;
    }
    return null;
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log('7. LifeCycleSample.componentDidUpdate() called');
    if (snapshot) {
      console.log('Previous color: ' + snapshot);
    }
    console.log('Current color: ' + this.state.color);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('3. LifeCycleSample.getDerivedStateFromProps() called');
    if (nextProps.color !== prevState.color) {
      return {color: nextProps.color};
    }
    return null;
  }

  render() {
    console.log('5. LifeCycleSample.render() called');
    const style = {
      color: this.props.color
    };
    return <div>
      <div style={style} ref={(ref) => this.myRef = ref}>
        <p>child.number: {this.state.number}</p>
        <p>child.color: {this.state.color}</p>
      </div>
      <button onClick={this.onIncrementButtonClick}>Increment</button>
    </div>
  }
}

export default LifeCycleSample;
