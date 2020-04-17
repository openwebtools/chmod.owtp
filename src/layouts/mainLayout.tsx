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
    flexDirection: 'column'
  }
});

const MainLayout = (props: any) => {
  const styles = useStyle({});
  return (
    <Container maxWidth="md" classes={{ root: styles.root }}>
      <div className={styles.content}>
        <Paper>
          <AppToolbar/>
          {props.children}
        </Paper>
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
