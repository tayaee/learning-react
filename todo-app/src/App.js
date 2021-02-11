import './App.css';
import React from "react";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  console.log('App()');
  return (
    <TodoTemplate>Todo content</TodoTemplate>
  )
};

export default App;
