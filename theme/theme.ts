import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light" as const,
  useSystemColorMode: true,
};

const styles = {
  global: {
    body: {
      bg: "white",
      color: "black",
    },
  },
};

const theme = extendTheme({
  colors: {
    white: "#FEFEFE",
    black: "#030303",
  },
  styles: styles,
  ...config,
});

export default theme;
