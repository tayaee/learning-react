import React, {Component} from "react";

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  };

  handleInputChange = (e) => {
    console.log(e.target.name + '=' + e.target.value);
    this.setState({[e.target.name]: e.target.value})
  };

  handleButtonSubmit = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({username: '', message: ''})
  };

  render() {
    return (
      <div>
        <h1>Event Test</h1>
        <input type='text'
               name='username'
               value={this.state.username}
               placeholder='Enter username'
               onChange={this.handleInputChange}/>
        <input type='text'
               name='message'
               value={this.state.message}
               placeholder='Enter message'
               onChange={this.handleInputChange}/>
        <button onClick={this.handleButtonSubmit}>Submit</button>
      </div>
    )
  }
}

export default EventPractice;