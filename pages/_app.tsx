import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

/**
 * Chmod App.
 */
export default class ChmodApp extends NextApp {
  /**
   * React Lifecycle callback.
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  /**
   * Render the app.
   * @return {void} App object.
   */
  render() {
    const {Component, pageProps} = this.props;

    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
      <React.Fragment>
        <Head>
          <title>Chmod Info</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider theme={theme(false)}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}