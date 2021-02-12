import React, {useCallback, useState} from "react";
// TODO: Browse icons at https://react-icons.netlify.com/#/icons/md
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  console.log('TodoInsert()');
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  }, [onInsert, value]);
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder='Enter what to do'/>
      <button type='submit'>
        <MdAdd/>
      </button>
    </form>
  )
};

export default TodoInsert;