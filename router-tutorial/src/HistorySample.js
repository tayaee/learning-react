import React, {Component} from "react";

class HistorySample extends Component {

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  render() {
    return <div>
      <h1>React Router history feature demo</h1>
      <button onClick={this.handleGoBack}>Go back</button>
      <button onClick={this.handleGoHome}>Go home</button>
    </div>
  }
}

export default HistorySample;
