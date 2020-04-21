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
                        <Tab label="calculator" aria-label='Chmod Calculator Tab' value='/' />
                        <Tab label="syntax" aria-label='Chmod Syntax Details Tab' value="/syntax"  />
                        <Tab label="examples" aria-label='Chmod examples Tab' value="/example"  />
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
                        <Tab icon={<CalcIcon />} aria-label='Chmod Calculator Tab'  value="/"/>
                        <Tab icon={<CodeIcon />} aria-label='Chmod Syntax Details Tab' value="/syntax"/>
                        <Tab icon={<SubjectIcon />} aria-label='Chmod examples Tab' value="/example"/>
                    </Tabs>
                </Hidden>
            </AppBar>
        </React.Fragment>
    )
};

export default AppToolbar;