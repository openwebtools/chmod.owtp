import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from './copyIcon';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Hidden from '@material-ui/core/Hidden';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '16px 16px 10px 16px',
      display: 'flex'
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: '85%',
      textAlign: 'center',
      paddingLeft: '15%'
    },
    iconButton: {
      padding: 10,
    },
    hiddenText: {
      display: 'none'
    }
  }),
);

const PermissionInput = (props) => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    setOpen(true);
    copyToClipboard(props.permissionValue);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const copyToClipboard = (value: string) => {
    var input = document.createElement('textarea');
    input.innerHTML = value;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
  };


  return (
    <Paper className={classes.root} elevation={0}>

      <Hidden only='xs' >

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleClose} variant="filled" severity="success">
            Result Copied!
        </Alert>
        </Snackbar>
        <Typography variant="h2" className={classes.label} >
          {props.permissionValue}
        </Typography>
      </Hidden>

      <Hidden smUp >

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={handleClose} variant="filled" severity="success">
            Result Copied!
        </Alert>
        </Snackbar>
        <Typography variant="h5" className={classes.label} >
          {props.permissionValue}
        </Typography>
      </Hidden>

      <IconButton className={classes.iconButton} aria-label="copy value" onClick={handleClick}>
        <CopyIcon />
      </IconButton>
    </Paper>
  );
};

export default PermissionInput;
