import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light" as const,
  useSystemColorMode: true,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("white", "black")(props),
      color: mode("black", "white")(props),
    },
  }),
};

const theme = extendTheme({
  colors: {
    white: "#f2f2f7",
    black: "#1c1c1e",
  },
  shadows: {},
  styles: styles,
  ...config,
});

export default theme;
