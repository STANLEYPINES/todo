import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
const Task = ({ title, descr, status, id }) => {

  const { removeTask, findTask, editTask } = useContext(TaskContext);
 
  const updateStatus = (event) => {
    editTask({id, status: event.target.checked});
  }

  return (
    <article className='task' id={id}>
      <h3>{title}</h3>
      <div>{descr}</div>
      <input type='checkbox' defaultChecked={status} onChange={updateStatus} />
      <div>
        <button type='button' onClick={() => findTask(id)}>edit</button>
        <button type='button' onClick={() => removeTask(id)}>delete</button>
      </div>
    </article>
  );
}

export default Task;