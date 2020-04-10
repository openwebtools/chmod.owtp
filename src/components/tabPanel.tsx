import React from 'react';
import {Typography} from '@material-ui/core';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <div className="tabContent">{children}</div>}
      <style jsx>{`
      .tabContent {
        padding: 24px 0px 24px 0px;
      }
    `}</style>
    </Typography>
  );
};

export default TabPanel;
