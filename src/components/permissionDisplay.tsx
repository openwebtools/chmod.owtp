import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from './copyIcon';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Hidden from '@material-ui/core/Hidden';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { PermissionDisplayValues } from '../models/permissionModel';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '16px 16px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    permissionContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginBottom: '12px'
    },
    optionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
    },
    optionsBtn: {
      fontSize: '0.75rem'
    }
  }),
);



const PermissionDisplay = (props) => {
  const styles = useStyles({});

  const [open, setOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [permissionValue, setPermissionValue] = React.useState<string | null>('');
  const [permissionLabel, setPermissionLabel] = React.useState<string | null>('');

  useEffect(() => {
    if (props.permissionValue) {
      handleOutputChange(alignmentValueMapper(alignment), alignment);
    }
  }, [props.permissionValue]);

  const handleOutputChange = (value: string, newAlignment: string | null) => {
    setAlignment(newAlignment);
    setPermissionValue(props.permissionValue[value.toLowerCase()]);
    setPermissionLabel(PermissionDisplayValues[value]);
  };

  const alignmentValueMapper = (alignment: string) => {
    switch(alignment) {
      case 'left':
        return 'Octal';
      case 'center':
        return 'Symbolic';
      case 'right':
        return 'Display';
    }
  }

  const handleClick = (e) => {
    setOpen(true);
    copyToClipboard(permissionValue);
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
      <Paper className={styles.root} elevation={0}>
        <div className={styles.permissionContainer}>
        <Hidden only='xs' >

          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} variant="filled" severity="success">
              Result Copied!
        </Alert>
          </Snackbar>
          <Typography variant="h4" className={styles.label} >
            {permissionValue}
          </Typography>
        </Hidden>

        <Hidden smUp >

          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} variant="filled" severity="success">
              Result Copied!
        </Alert>
          </Snackbar>
          <Typography variant="h6" className={styles.label} >
            {permissionValue}
          </Typography>
        </Hidden>

        <IconButton className={styles.iconButton} aria-label="copy value" onClick={handleClick}>
          <CopyIcon />
        </IconButton>
        </div>
      <div className={styles.optionContainer}>
        <div>{permissionLabel}</div>
        <ToggleButtonGroup value={alignment} exclusive onChange={(e:any, v:string) => handleOutputChange(e.target.textContent, v)} aria-label="text alignment" size="small">
          <ToggleButton value="left" aria-label="left aligned" className={styles.optionsBtn}>
            Octal
            </ToggleButton>
          <ToggleButton value="center" aria-label="centered" className={styles.optionsBtn}>
            Symbolic
            </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned" className={styles.optionsBtn}>
            Display
            </ToggleButton>
        </ToggleButtonGroup>
      </div>
      </Paper>
  );
};

export default PermissionDisplay;
