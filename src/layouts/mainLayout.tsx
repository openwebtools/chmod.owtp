import React from 'react';
import Container from '@material-ui/core/Container';
import Footer from '../components/footer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppToolbar from '../components/appToolbar';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    width: '100%',
    paddingTop: '20px',
    paddingBottomn: '20px',
  },
  content: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '16px'
  }
});

const MainLayout = (props: any) => {
  const styles = useStyle({});
  return (
    <Container maxWidth="md" classes={{ root: styles.root }}>
        <Paper className={styles.content}>
          <AppToolbar/>
          {props.children}
        </Paper>
      <Footer />
    </Container>
  );
};

export default MainLayout;
