// import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name}야 안녕</h1>  
      {name === '리액트' && <h1>리액트입니다</h1>}
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
