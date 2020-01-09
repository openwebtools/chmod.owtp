import React from 'react';
import MainLayout from '../src/layouts/main';
import ContentLayout from '../src/layouts/content';
import {Typography, makeStyles, Tabs, Tab, AppBar} from '@material-ui/core';
import TabPanel from '../src/components/tabpanel';

const useStyle = makeStyles({
  'header': {
    'text-align': 'center',
    'margin-top': '20px',
    'margin-bottom': '20px',
  },
  'content-root': {
    'display': 'flex',
    'flex-direction': 'column',
    'min-height': '100%',
    'height': '100%',
  },
});

/**
 * Material Theme props.
 * @param {number} index Tab index
 * @return {any} Tab props.
 */
function a11yProps(index: number) {
  return {
    'id': `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const Index = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styles = useStyle({});
  return (
    <MainLayout>
      <ContentLayout>
        <Typography variant="h5" classes={{root: styles.header}} color="primary">chmod.info</Typography>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
            aria-label="chmod options">
            <Tab label="calculator" {...a11yProps(0)} />
            <Tab label="syntax" {...a11yProps(1)}/>
            <Tab label="man" {...a11yProps(2)}/>
            <Tab label="history" {...a11yProps(3)}/>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Coming Soon
        </TabPanel>
        <TabPanel value={value} index={1}>
          Coming Soon
        </TabPanel>
        <TabPanel value={value} index={2}>
          Coming Soon
        </TabPanel>
        <TabPanel value={value} index={3}>
          Coming Soon
        </TabPanel>
      </ContentLayout>
    </MainLayout>
  );
};

export default Index;
