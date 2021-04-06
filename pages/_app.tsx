import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../src/theme/theme";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <style jsx global>
        {`
          html,
          body,
          #app,
          #__next {
            height: 100%;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default App;
