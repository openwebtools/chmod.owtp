import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, makeStyles } from '@material-ui/core';
import CalcIcon from './calcIcon';
import CodeIcon from '@material-ui/icons/Code';
import SubjectIcon from '@material-ui/icons/Subject';
import { useRouter } from 'next/router'

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
    const router = useRouter();
    const [value, setValue] = React.useState(router.route);


    const handleChange = (event, newValue) => {
        setValue(newValue);
        router.push(newValue);
    };

    const styles = useStyle({});

    return (
        <React.Fragment>
            <Typography variant="h5" classes={{ root: styles.header }} color="primary">chmod calculator</Typography>
            <AppBar position="static" color="default">
                <Hidden only='xs' implementation="css">
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        value={value}
                        onChange={handleChange}
                        centered
                        aria-label="chmod options">
                        <Tab label="calculator" {...a11yProps(0)} value='/'  />
                        <Tab label="syntax" {...a11yProps(1)} value="/syntax"  />
                        <Tab label="examples" {...a11yProps(2)} value="/example"  />
                    </Tabs>
                </Hidden>
                <Hidden smUp implementation="css">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        aria-label="chmod options">
                        <Tab icon={<CalcIcon />} {...a11yProps(0)} value="/"/>
                        <Tab icon={<CodeIcon />} {...a11yProps(1)} value="/syntax"/>
                        <Tab icon={<SubjectIcon />} {...a11yProps(2)} value="/example"/>
                    </Tabs>
                </Hidden>
            </AppBar>
        </React.Fragment>
    )
};

export default AppToolbar;