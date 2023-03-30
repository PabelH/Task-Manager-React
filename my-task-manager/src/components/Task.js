import React from 'react';
import '../style-sheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, complete, completeTask, deleteTask }) {
  return (
    <div className={complete ? 'task-container complete' : 'task-container'}>
      <div 
        className='text-task'
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div 
        className='task-container-icons'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );    
}

export default Task;