import React from 'react';
import Head from 'next/head';

const Header = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta name="description" content="A simple chmod calculator."/>
      <meta name="keywords" content="chmod calculator, chmod, open web tools, chmod tool"/>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="author" content="Open Web Tools"></meta>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
  );
};

export default Header;
