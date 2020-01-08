import React from 'react';
import {Paper} from '@material-ui/core';

const ContentLayout = (props: any) => {
  return (
    <Paper>
      {props.children}
    </Paper>
  );
};

export default ContentLayout;
