import React from 'react';
import NextApp from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialTheme from '../src/theme';
import Router from 'next/router';
import withGA from 'next-ga';

/**
 * Chmod App.
 */
class ChmodApp extends NextApp {
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

    return (
      <React.Fragment>
        <MaterialTheme>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </MaterialTheme>
        <style jsx global>{`
          html, body, #app, #__next {
            height: 100%
          }
        `}
        </style>
      </React.Fragment>
    );
  }
}

export default withGA('UA-155159093-2', Router)(ChmodApp);
