import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Toolbar = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" align="center" mb={4} p={4} {...props}>
      <NextLink href="/" passHref>
        <Link>
          <Heading as="h1" size="md">
            chmod calculator
          </Heading>
        </Link>
      </NextLink>
      <Spacer />
      <HStack spacing="24px">
        <NextLink href="/" passHref>
          <Link>
            <Button aria-label="chmod Calculator">Calculator</Button>
          </Link>
        </NextLink>
        <NextLink href="/syntax" passHref>
          <Link>
            <Button aria-label="chmod Syntax">Syntax</Button>
          </Link>
        </NextLink>
        <NextLink href="/examples" passHref>
          <Link>
            <Button aria-label="chmod Examples">Examples</Button>
          </Link>
        </NextLink>
        <IconButton
          onClick={toggleColorMode}
          aria-label={
            colorMode === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"
          }
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </HStack>
    </Flex>
  );
};

export default Toolbar;
