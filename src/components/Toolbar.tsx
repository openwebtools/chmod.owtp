import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";

const Toolbar = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleColorModeClick = () => {
    toggleColorMode();
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      p={4}
      justify="space-between"
      wrap="wrap"
      {...props}
      direction={["column", "row", "row", "row"]}
    >
      <Flex
        align="center"
        justify="space-between"
        w={["100%", "auto", "auto", "auto"]}
      >
        <NextLink href="/" passHref>
          <Link>
            <Heading as="h1" size="md">
              chmod calculator
            </Heading>
          </Link>
        </NextLink>
        <IconButton
          onClick={toggleMenu}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
        />
      </Flex>

      <Spacer />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <NextLink href="/" passHref>
            <Link>
              <Button aria-label="chmod Calculator" variant="ghost">
                Calculator
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/syntax" passHref>
            <Link>
              <Button aria-label="chmod Syntax" variant="ghost">
                Syntax
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/examples" passHref>
            <Link>
              <Button aria-label="chmod Examples" variant="ghost">
                Examples
              </Button>
            </Link>
          </NextLink>
          <IconButton
            onClick={handleColorModeClick}
            aria-label={
              colorMode === "dark" ? "Toggle Light Mode" : "Toggle Dark Mode"
            }
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            variant="ghost"
          />
        </Stack>
      </Box>
    </Flex>
  );
};

export default Toolbar;
