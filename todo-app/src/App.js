import './App.css';
import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  console.log('App()');
  function createBulkTodos() {
    const arr = [];
    for (let i = 1; i <= 2500; i++) {
      arr.push({
        id: i,
        text: `To do ${i}`,
        checked: false
      })
    }
    return arr;
  }
  const [todos, setTodos] = useState(createBulkTodos());
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
  const onRemove = useCallback(id => {
    const updatedTodos = todos.filter(todo => todo.id != id);
    setTodos(updatedTodos);
  }, [todos]);
  const onToggle = useCallback(id => {
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,);
    setTodos(updatedTodos);
  }, [todos]);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
};

export default App;
