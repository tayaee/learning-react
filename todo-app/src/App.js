import './App.css';
import React from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useState} from "react";

const App = () => {
  console.log('App()');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      checked: false
    },
    {
      id: 2,
      text: 'Scrambled it to make a type specimen book. It has survived not',
      checked: true
    }
  ]);
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  )
};

export default App;
