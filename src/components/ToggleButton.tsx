import React, { useState } from "react";
import { Button, ButtonGroup, useColorMode } from "@chakra-ui/react";

const ToggleButton = (props: any) => {
  const [activeButtonKey, setActiveButtonKey] = useState<string | null>(
    props.initial
  );
  const { colorMode } = useColorMode();

  const handleClick = (key: string) => {
    if (props.onToggle) {
      props.onToggle(key);
    }
    setActiveButtonKey(key);
  };

  const getColorScheme = (key: string) => {
    if (activeButtonKey === key) {
      return colorMode === "light" ? "dark" : "light";
    }
    return "gray";
  };

  return (
    <ButtonGroup variant="outline" {...props} isAttached={true}>
      {props.items?.map((x: string) => (
        <Button
          key={x}
          variant={activeButtonKey === x ? "solid" : "outline"}
          colorScheme={getColorScheme(x)}
          onClick={() => handleClick(x)}
        >
          {x}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ToggleButton;
