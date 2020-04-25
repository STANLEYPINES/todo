import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Dialog, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

const Modal = () => {
  const { addTask, editItem, editTask, modalStatus, setModalStatus } = useContext(TaskContext);

  const [title, setTitle] = useState('');

  const [descr, setDescr] = useState('');

  const updateTitle = (event) => { setTitle(event.target.value) };

  const updateDescr = (event) => { setDescr(event.target.value) };

  const resetFields = () => {
    setTitle('');
    setDescr('');
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (editItem) editTask({ title, descr, id: editItem.id });
    else if (title) addTask({ title, descr, status: false });
    resetFields();
    setModalStatus(false)
  };

  const handleClose = () => {
    resetFields();
    setModalStatus(false);
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      if (editItem.descr) setDescr(editItem.descr);
      setModalStatus(true);
    } else setTitle('');
  }, [editItem, setModalStatus]);


  return (
    <Dialog
      open={modalStatus}
      onClose={handleClose}
      onBackdropClick={handleClose}>
      <form onSubmit={onSubmit} >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type='text'
            id='title'
            name='title'
            label="Title"
            fullWidth
            value={title}
            onChange={updateTitle}
            required
          />
          <TextField
            margin="dense"
            type='text'
            id='description'
            name='description'
            label="Description"
            fullWidth
            value={descr}
            onChange={updateDescr}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" type='submit'>
            {editItem ? 'Edit' : 'Submit'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>

  );
}

export default Modal;