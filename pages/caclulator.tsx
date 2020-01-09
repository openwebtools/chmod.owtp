import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';

const Calculator = () => {
  const header = {
    header: 'chmod calculator',
    subHeader: 'An easy to use, dead simple chmod calculator',
  };
  return (
    <div>
      <SubjectHeader {...header}/>
    </div>
  );
};

export default Calculator;
