import React from 'react';
import MainLayout from '../src/layouts/main';
import ContentLayout from '../src/layouts/content';

const Index = () => (
  <MainLayout>
    <ContentLayout>
      <p className="Heading">chmod.info</p>
    </ContentLayout>
    <style jsx>{`
      .Heading {
        text-align: center;
      }
    `}</style>
  </MainLayout>
);

export default Index;
