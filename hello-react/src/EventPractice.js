import React, {Component} from "react";

class EventPractice extends Component {
  state = {
    message: ''
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target.name + '=' + e.target.value);
    this.setState({message: e.target.value})
  }

  handleButtonSubmit() {
    alert(this.state.message);
    this.setState({message: ''})
  }

  render() {
    return (
      <div>
        <h1>Event Test</h1>
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