import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import { Box, Portal } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toolbar />
      <Box p={4}>{children}</Box>
      <Portal>
        <Footer />
      </Portal>
    </div>
  );
};

export default Layout;
