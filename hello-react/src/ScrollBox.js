import React, {Component} from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    console.log('scrollToBottom');
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

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
    return (
      <div style={style}
           ref={(ref) => {
             this.box = ref
           }}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
