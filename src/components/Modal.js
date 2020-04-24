import React, { useState, useContext, useEffect } from 'react'; 
import { TaskContext } from './TaskContext';

const Modal = () => {
  const { addTask, editItem, editTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const updateTitle = (event) => { setTitle(event.target.value) };

  const updateDescr = (event) => { setDescr(event.target.value) };

  const onSubmit = (event) => { 
    event.preventDefault();
    if (editItem) editTask({ title, descr, id: editItem.id });
    else if (title) addTask({ title, descr, status: false });
    setTitle('');
    setDescr('');
  };

  useEffect(() => {
    if(editItem) {
      setTitle(editItem.title);
      if (editItem.descr) setDescr(editItem.descr)
    } else setTitle('');
  }, [editItem]);

  return (
    <div className='modal'>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>title</label>
        <input 
          type='text' 
          id='title' 
          name='title' 
          value={title} 
          onChange={updateTitle} 
          required
        />
        <label htmlFor='description'>description</label>
        <input 
          type='text' 
          id='description' 
          name='description' 
          value={descr} 
          onChange={updateDescr} 
        />
        <button>
          { editItem ? 'Edit' : 'Submit' }
        </button>
      </form>
    </div>
  );
}

export default Modal;