import React from 'react';
import {Typography, Link} from '@material-ui/core';
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
    }
  }),
);

const Footer = () => {
  const classes = useStyles({});

  return (
    <div>
      <Typography variant="body2" color="inherit" align="center">
        <Link href="https://openweb.tools" className={classes.root}>
          <OwtIcon className={classes.icon} fontSize="large"/>
          {'| Open Web Tools © '}
          {new Date().getFullYear()}
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
