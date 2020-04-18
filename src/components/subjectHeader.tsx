import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

interface ISubjectHeader {
    header: string,
    subHeader: string
}


const useStyle = makeStyles({
  text: {
    textAlign: 'center',
  },
  headerContainer: {
    width: '100%',
    padding: '12px',
  },
});

const SubjectHeader = (props: ISubjectHeader) => {
  const styles = useStyle({});
  return (
    <div className={styles.headerContainer}>
      <Typography variant="subtitle1" classes={{root: styles.text}} >{props.header}</Typography>
      <Typography variant="body2" classes={{root: styles.text}} >{props.subHeader}</Typography>
    </div>
  );
};

export default SubjectHeader;
