import React, { useState, createContext, useEffect } from 'react';
import uuid from 'react-uuid';

export const TaskContext = createContext();

export const TaskProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); 

  const [editItem, setEditItem] = useState(null);

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, { ...newTask, id: uuid() }]);
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const clearAll = () => {
    setTasks([]);
  }

  const editTask = (editedTask) => {
    const updatedTasks = tasks.map(task => (
      task.id === editedTask.id ? { ...task, ...editedTask } : task
    ));
    setTasks(updatedTasks);
    setEditItem(null);
  }

  const findTask = (id) => {
    const findedTask = tasks.find(task => task.id === id);
    if (findedTask) setEditItem(findedTask);
  }

  return (
    <TaskContext.Provider 
      value={{ 
        tasks, 
        addTask, 
        removeTask, 
        clearAll, 
        findTask, 
        editTask, 
        editItem 
      }}>
      {props.children}
    </TaskContext.Provider>
  );
}