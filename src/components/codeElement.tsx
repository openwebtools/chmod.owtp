import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CopyIcon from './copyIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.body2,
        padding: theme.spacing(2, 2),
        margin: theme.spacing(2, 0),
        background: '#272c34',
        display: 'flex',
        alignItems: 'center'
    },
    codeContent: {
        flex: '1',
        display: 'flex'
    },
    iconButton: {
        padding: 5,
    },
}));

const CodeElement = (props) => {
    const styles = useStyles();

    const copyToClipboard = (value: string) => {
        var input = document.createElement('textarea');
        input.innerHTML = value;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
        return result;
    };


    return (
        <div className={styles.root}>
            <div className={styles.codeContent}>
                {props.children}
            </div>
            <IconButton className={styles.iconButton} aria-label="copy value" onClick={(e) => copyToClipboard(props.children)}>
                <CopyIcon />
            </IconButton>
        </div>
    );
};

export default CodeElement;