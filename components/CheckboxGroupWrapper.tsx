import { CheckboxGroup, useColorMode } from "@chakra-ui/react";
import React from "react";

const CheckboxGroupWrapper = (props: any) => {
  const { colorMode } = useColorMode();
  return (
    <CheckboxGroup
      colorScheme={colorMode === "light" ? "dark" : "light"}
      {...props}
    ></CheckboxGroup>
  );
};

export default CheckboxGroupWrapper;
