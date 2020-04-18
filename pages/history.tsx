import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';
import MainLayout from '../src/layouts/mainLayout';

const History = () => {
  const header = {
    header: '',
    subHeader: 'History of chmod command',
  };
  return (
    <MainLayout>
      <SubjectHeader {...header}/>
    </MainLayout>
  );
};

export default History;
