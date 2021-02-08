import React, {Component} from "react";

class EventPractice extends Component {
  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <h1>Event Test</h1>
        <input type='text'
               name='message'
               value={this.state.message}
               placeholder='Enter message'
               onChange={(e) => {
                 console.log(e.target.name + '=' + e.target.value);
                 this.setState({message: e.target.value})
               }}/>
        <button onClick={() => {
          alert(this.state.message);
          this.setState({message: ''})
        }}>Submit
        </button>
      </div>
    )
  }
}

export default EventPractice;