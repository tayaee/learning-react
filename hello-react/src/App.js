import './App.css';

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
      <div style={style}>{name}1</div>
      <div style={{
        backgroundColor: 'gray',
        color: 'lightblue',
        fontSize: '40px',
        fontWeight: 'bold',
        padding: 16 // px
      }}>{name}2</div>
      <div className='react'>{name}3</div>
    </>
    );
}

export default App;
