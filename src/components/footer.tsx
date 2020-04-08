import React from 'react';
import {Typography, Link} from '@material-ui/core';

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="body2" color="inherit" align="center">
        <Link href="https://openweb.tools">
          {'Open Web Tools © '}
          {new Date().getFullYear()}
        </Link>
      </Typography>
      <style jsx>{`
        .footer {
            margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
