import React from 'react';
import SubjectHeader from '../src/components/subjectHeader';
import MarkdownElement from '../src/components/MarkdownElement';

const ExamplePage = () => {
  const header = {
    header: 'chmod examples',
    subHeader: 'Examples for chmod command',
  };
  return (
    <div>
      <SubjectHeader {...header}/>
      <MarkdownElement>
        `chmod`
      </MarkdownElement>
    </div>
  );
};

export default ExamplePage;
