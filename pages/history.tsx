import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';

const History = () => {
  const header = {
    header: 'chmod history',
    subHeader: 'History of chmod command',
  };
  return (
    <div>
      <SubjectHeader {...header}/>
    </div>
  );
};

export default History;
