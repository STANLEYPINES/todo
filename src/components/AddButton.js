import React, { useContext } from 'react';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { TaskContext } from '../context/TaskContext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const AddButton = () => {
  const { setModalStatus } = useContext(TaskContext);
  const classes = useStyles();

  return (
    <Fab color="primary" className={classes.fab} aria-label="add" onClick={() => setModalStatus(true)}>
      <Add />
    </Fab>
  )

}

export default AddButton;

