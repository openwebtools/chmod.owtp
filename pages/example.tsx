import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';
import { Divider, makeStyles } from '@material-ui/core';
import Markdown from '../src/components/Markdown';
import MainLayout from '../src/layouts/mainLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

const Example = () => {
  const styles = useStyles();
  const header = {
    header: 'chmod examples',
    subHeader: 'Examples for chmod command',
  };
  return (
    <MainLayout>
      <SubjectHeader {...header} />
      <Divider />
      <div className={styles.root}>
        <Markdown >
          chmod 777 file_name
      </Markdown>
      </div>
    </MainLayout>
  );
};

export default Example;
