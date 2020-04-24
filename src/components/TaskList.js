import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);  

  const renderTasks = () => {
    return tasks.map(task => (
      <Task title={task.title} descr={task.descr} id={task.id} status={task.status} key={task.id}/>
    ))
  }

  return (
    <div>
      {tasks.length ? renderTasks() : (
        <div>No tasks...</div>
      )}      
    </div>
  );
}

export default TaskList;