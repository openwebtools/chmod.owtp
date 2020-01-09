import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

// eslint-disable-next-line no-unused-vars
const useStyle = makeStyles({
  'contentRoot': {
    'display': 'flex',
    'flex-direction': 'column',
    'min-height': '100%',
    'height': '100%',
  },
});

const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;

  // const styles = useStyle({});
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

export default TabPanel;
