import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';
import MainLayout from '../src/layouts/mainLayout';

const Syntax = () => {
  const header = {
    header: '',
    subHeader: 'Syntax of chmod command',
  };
  return (
    <MainLayout>
      <SubjectHeader {...header}/>
    </MainLayout>
  );
};

export default Syntax;
