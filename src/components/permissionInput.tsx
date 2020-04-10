import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from './copyIcon';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: 1,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

const PermissionInput = () => {
  const classes = useStyles({});

  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{'aria-label': 'search google maps'}}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <CopyIcon />
      </IconButton>
    </Paper>
  );
};

export default PermissionInput;
