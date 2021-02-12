import './App.css';
import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

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
  const nextId = useRef(3);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  )
};

export default App;
