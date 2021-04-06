import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <Flex direction="column" h="100%">
      <Head>
        <title>{title}</title>
      </Head>
      <Toolbar />
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
