import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { TaskProvider } from './components/TaskContext';
import Modal from './components/Modal';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <TaskList />
        <Modal />
      </div>
    </TaskProvider>
  );
}

export default App;
 