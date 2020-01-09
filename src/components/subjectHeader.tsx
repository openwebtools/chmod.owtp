import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

interface ISubjectHeader {
    header: string,
    subHeader: string
}


const useStyle = makeStyles({
  'text': {
    'text-align': 'center',
  },
  'headerContainer': {
    'width': '100%',
  },
});

const SubjectHeader = (props: ISubjectHeader) => {
  const styles = useStyle({});
  return (
    <div className="headerContainer">
      <Typography variant="subtitle1" classes={{root: styles.text}} >{props.header}</Typography>
      <Typography variant="subtitle2" classes={{root: styles.text}} >{props.subHeader}</Typography>
    </div>
  );
};

export default SubjectHeader;
