import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, makeStyles } from '@material-ui/core';
import CalcIcon from './calcIcon';
import CodeIcon from '@material-ui/icons/Code';
import SubjectIcon from '@material-ui/icons/Subject';
import HistoryIcon from '@material-ui/icons/History';

const useStyle = makeStyles({
    'header': {
        'text-align': 'center',
        'margin-top': '20px',
        'margin-bottom': '20px',
    }
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
}

const AppToolbar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const styles = useStyle({});

    return (
        <React.Fragment>
            <Typography variant="h5" classes={{ root: styles.header }} color="primary">chmod calculator</Typography>
            <AppBar position="static" color="default">
                <Hidden only='xs' implementation="css">
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        centered
                        aria-label="chmod options">
                        <Tab label="calculator" {...a11yProps(0)} />
                        <Tab label="syntax" {...a11yProps(1)} />
                        <Tab label="man" {...a11yProps(2)} />
                        <Tab label="history" {...a11yProps(3)} />
                    </Tabs>
                </Hidden>
                <Hidden smUp implementation="css">
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        centered
                        aria-label="chmod options">
                        <Tab icon={<CalcIcon />} {...a11yProps(0)} />
                        <Tab icon={<CodeIcon />} {...a11yProps(1)} />
                        <Tab icon={<SubjectIcon />} {...a11yProps(2)} />
                        <Tab icon={<HistoryIcon />} {...a11yProps(3)} />
                    </Tabs>
                </Hidden>
            </AppBar>
        </React.Fragment>
    )
};

export default AppToolbar;