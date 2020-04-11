import React from 'react';
import {Typography, Link, Divider} from '@material-ui/core';
import OwtIcon from './owtIcon';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      paddingRight: '5px',
      marginTop: '2px'
    },
    footer: {
      marginBottom: '5px'
  }
  }),
);

const Footer = () => {
  const classes = useStyles({});

  return (
    <div className={classes.footer}>
      <Typography variant="body2" color="inherit" align="center">
        <Link href="https://openweb.tools" className={classes.root}>
          <OwtIcon className={classes.icon} fontSize="large"/>
          {'| Open Web Tools © '}
          {new Date().getFullYear()}
        </Link>
      </Typography>
      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default Footer;
