import React from 'react';
import MainLayout from '../src/layouts/mainLayout';
import {makeStyles} from '@material-ui/core';
import Calculator from './calculator';

const useStyle = makeStyles({

});


const Index = () => {
  const styles = useStyle({});
  return (
    <Calculator/>
  );
};

export default Index;
