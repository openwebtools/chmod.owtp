import React from 'react';
import Container from '@material-ui/core/Container';
import Footer from '../components/footer';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
  root: {
    'display': 'flex',
    'flex-direction': 'column',
    'min-height': '100%',
    'height': '100%',
    'width': '100%',
  },
});

const MainLayout = (props: any) => {
  const styles = useStyle({});
  return (
    <Container maxWidth="sm" classes={{root: styles.root}}>
      <div className="content">{props.children}</div>
      <Footer/>
      <style jsx>{`
      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    </Container>
  );
};

export default MainLayout;
