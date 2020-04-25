import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';
import { List, Typography } from '@material-ui/core';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);  

  const renderTasks = () => {
    return tasks.map(task => (
      <Task title={task.title} descr={task.descr} id={task.id} status={task.status} key={task.id}/>
    ))
  }

  return (
    <List>
      {tasks.length ? renderTasks() : (
        <Typography component="span" variant="body2">No tasks...</Typography>
      )}      
    </List>
  );
}

export default TaskList;