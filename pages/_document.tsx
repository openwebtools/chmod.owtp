import React from 'react';
import Document, {Main, NextScript, Head} from 'next/document';
import {ServerStyleSheets as MaterialUiServerStyleSheets} from '@material-ui/styles';
import Header from '../src/components/header';

/**
 * Document.
 */
export default class AppDocument extends Document {
  /**
   * Render function.
   * @return {Element} Rendered Document.
   */
  render() {
    return (
      <html lang="en">
        <Head>
          <Header/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>);
  }
}

AppDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
