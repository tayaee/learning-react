import React, {Component} from "react";
import './ValidationSample.css'

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    console.log('handleChange: Updating ' + e.target.name + ' with ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleButtonSubmit = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
  };

  render() {
    return (
      <div>
        <input type='password'
               name='password'
               value={this.state.password}
               onChange={this.handleChange}
               className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}/>
        <button onClick={this.handleButtonSubmit}>Submit</button>
      </div>
    )
  }
}

export default ValidationSample;