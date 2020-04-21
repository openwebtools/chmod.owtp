import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { PermissionDisplayValues } from '../models/permissionModel';
import CodeElement from './codeElement';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '16px 16px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    permissionContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center'
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

  const alignmentValueMapper = (value: string) => {
    switch (value) {
      case 'left':
        return 'Octal';
      case 'center':
        return 'Symbolic';
      case 'right':
        return 'Display';
    }
  }


  return (
    <Paper className={styles.root} elevation={0}>
      <div className={styles.permissionContainer}>
        <CodeElement content={permissionValue}>
          <Typography variant="h6" className={styles.label} >
            {permissionValue}
          </Typography>
        </CodeElement>
      </div>
      <div className={styles.optionContainer}>
        <div>{permissionLabel}</div>
        <ToggleButtonGroup value={alignment} exclusive onChange={(e: any, v: string) => handleOutputChange(e.target.textContent, v)} aria-label="Output mode options" size="small">
          <ToggleButton value='left' aria-label='Switch to Octal Output Mode' className={styles.optionsBtn}>
            Octal
          </ToggleButton>
          <ToggleButton value='center' aria-label='Switch to Symbolic Output Mode' className={styles.optionsBtn}>
            Symbolic
          </ToggleButton>
          <ToggleButton value='right' aria-label='Switch to Permission display Output' className={styles.optionsBtn}>
            Display
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </Paper>
  );
};

export default PermissionDisplay;
