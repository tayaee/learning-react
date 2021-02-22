import React from "react";
import cn from 'classnames';
import './TodoListItem.scss';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo;
  console.log(`TodoListItem() id=${id}, text=${text}, checked=${checked}`);
  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
};

export default React.memo(TodoListItem);