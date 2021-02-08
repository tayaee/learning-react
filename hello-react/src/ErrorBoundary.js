import React, {Component} from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
    error_msg: '',
  };

  componentDidCatch(error, info) {
    this.setState({error: true, error_msg: error.toString()});
    console.log('componentDidCatch(), error: ', error, info);
  }

  render() {
    if (this.state.error) {
      return <div>Error occurred: {this.state.error_msg}</div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;