import { Box, Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PermissionDisplayValues } from "../models/permissionDisplayValues";
import CodeElement from "./CodeElement";
import ToggleButton from "./ToggleButton";

const PermissionDisplay = (props: any) => {
  const [permissionValue, setPermissionValue] = useState<string | null>(null);
  const [permissionLabel, setPermissionLabel] = useState<string | null>("");
  const [outputFormat, setOutputFormat] = useState<string>("Octal");

  useEffect(() => {
    if (props.permission) {
      handleOutputChange(outputFormat);
    }
  }, [props.permission]);

  const handleOutputChange = (value: string) => {
    if (!value) {
      return;
    }
    setOutputFormat(value);
    setPermissionValue(props.permission[value.toLowerCase()]);
    setPermissionLabel(
      PermissionDisplayValues[value as keyof typeof PermissionDisplayValues]
    );
  };

  return (
    <Box w="60%">
      <Text align="center">{permissionLabel}</Text>
      <CodeElement>{permissionValue}</CodeElement>
      <Center>
        <ToggleButton
          items={["Octal", "Symbolic", "Display"]}
          initial="Octal"
          size="sm"
          onToggle={handleOutputChange}
        ></ToggleButton>
      </Center>
    </Box>
  );
};

export default PermissionDisplay;
