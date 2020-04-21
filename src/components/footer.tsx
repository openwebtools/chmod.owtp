import React from 'react';
import {Typography, Link} from '@material-ui/core';
import OwtIcon from './owtIcon';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      paddingRight: '6px',
      marginTop: '2px'
    }
  }),
);

const Footer = () => {
  const styles = useStyles({});

  return (
    <div>
      <Typography variant="body2" color="inherit" align="center">
        <Link href="https://openweb.tools" className={styles.root}>
          <OwtIcon className={styles.icon}/>
          {'| Open Web Tools © '}
          {new Date().getFullYear()}
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
