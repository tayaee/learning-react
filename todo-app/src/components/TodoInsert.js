import React, {useCallback, useState} from "react";
// TODO: Browse icons at https://react-icons.netlify.com/#/icons/md
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = () => {
  console.log('TodoInsert()');
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, []);
  return (
    <form className='TodoInsert'>
      <input value={value} onChange={onChange} placeholder='Enter what to do'/>
      <button type='submit'>
        <MdAdd/>
      </button>
    </form>
  )
};

export default TodoInsert;