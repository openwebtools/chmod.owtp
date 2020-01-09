import React from 'react';
import {Typography} from '@material-ui/core';

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="body2" color="inherit" align="center">
        {'Open Web Tools Project © '}
        {new Date().getFullYear()}
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
