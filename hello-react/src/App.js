import './App.css';
import * as React from "react";

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '40px',
    fontWeight: 'bold',
    padding: 16 // px
  }
  return (
    <>
      {/*comment 1*/}
      <div style={style}>{name}1</div>
      <div style={{
        // comment 2
        backgroundColor: 'gray',
        color: 'lightblue',
        fontSize: '40px',
        fontWeight: 'bold',
        padding: 16 // px
      }}>{name}2
      </div>
      <div className='react'>{name}3 FIXME</div>
      <input/>
      /* This is not a comment */
      <div>React version {React.version}</div>
    </>
  );
}

export default App;
