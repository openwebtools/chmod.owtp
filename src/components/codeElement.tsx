import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton/IconButton';
import CopyIcon from './copyIcon';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.body2,
        padding: theme.spacing(2, 2),
        margin: theme.spacing(1, 0),
        background: '#272c34',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        minWidth: '260px'
    },
    codeContent: {
        flex: '1',
        display: 'flex'
    },
    iconButton: {
        padding: '2px',
        margin: '6px 6px 6px 12px'
    },
    hide: {
        display: 'none',
    }
}));

const CodeElement = (props) => {
    const styles = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = (value) => {
        setOpen(true);
        copyToClipboard(value);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

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
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} variant="filled" severity="success">
                    Command Copied!
                </Alert>
            </Snackbar>
            <div className={styles.codeContent}>
                {props.children}
            </div>
            {
                !props.hideCopy &&
                <IconButton className={styles.iconButton} aria-label="copy value" onClick={(e) => handleClick   (props.children)} >
                    <CopyIcon />
                </IconButton>
            }
        </div>
    );
};


export default CodeElement;