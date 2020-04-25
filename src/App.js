import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import Modal from './components/Modal';
import AddButton from './components/AddButton';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskProvider>
        <TaskList />
        <Modal />
        <AddButton />
      </TaskProvider>
    </div>
  );
}

export default App;
 