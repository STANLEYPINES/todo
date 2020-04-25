import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TaskContext } from '../context/TaskContext';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction, Typography, ListItemIcon } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  secondaryAction: {
    paddingRight: 100,
  },
}));

const Task = ({ title, descr, status, id }) => {

  const { removeTask, findTask, editTask } = useContext(TaskContext);
  
  const classes = useStyles();
  
  const updateStatus = (event) => {
    editTask({ id, status: event.target.checked });
  }

  return (

    <ListItem id={id} className={classes.secondaryAction} divider>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={status}
          disableRipple
          onChange={updateStatus}
        />
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={ descr ? <Typography component="span" variant="body2">{descr}</Typography> : null }
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="edit"
          onClick={() => findTask(id)}
          tabIndex='0'>
          <Edit />
        </IconButton>
        <IconButton
          aria-label="delete"
          tabIndex='1'
          onClick={() => removeTask(id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Task;