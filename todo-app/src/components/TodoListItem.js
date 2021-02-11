import React from "react";
import './TodoListItem.scss';
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

const TodoListItem = () => {
  return (
    <div className='TodoListItem'>
      <div className='checkbox'>
        <MdCheckBoxOutlineBlank/>
        <div className='text'>To do 1</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
};

export default TodoListItem;