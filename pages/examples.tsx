import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';

const ExamplePage = () => {
  const header = {
    header: 'chmod examples',
    subHeader: 'Examples for chmod command',
  };
  return (
    <div>
      <SubjectHeader {...header}/>
    </div>
  );
};

export default ExamplePage;
