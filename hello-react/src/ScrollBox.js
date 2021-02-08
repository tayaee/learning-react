import React, {Component} from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: '1px',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };
    const innerStyle = {
      height: '600px',
      width: '300px',
      background: 'linear-gradient(white, black)',
    };
    return <div style={style}>
      <div style={innerStyle}>One</div>

    </div>
  }
}

export default ScrollBox;
