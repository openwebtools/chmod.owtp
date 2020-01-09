import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';

const Syntax = () => {
  const header = {
    header: 'chmod syntax',
    subHeader: 'Syntax of chmod command',
  };
  return (
    <div>
      <SubjectHeader {...header}/>
    </div>
  );
};

export default Syntax;
