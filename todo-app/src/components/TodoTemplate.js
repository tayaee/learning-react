import React from "react";
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
  console.log('TodoTemplate()');
  return <div className='TodoTemplate'>
    <div className='app-title'>To Do</div>
    <div className='content'>{children}</div>
  </div>
};

export default TodoTemplate;