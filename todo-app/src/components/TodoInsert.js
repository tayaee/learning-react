import React from "react";
// TODO: Browse icons at https://react-icons.netlify.com/#/icons/md
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = () => {
  console.log('TodoInsert()');
  return (
    <form className='TodoInsert'>
      <input placeholder='Enter what to do'/>
      <button type='submit'>
        <MdAdd/>
      </button>
    </form>
  )
};

export default TodoInsert;