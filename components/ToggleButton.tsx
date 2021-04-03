import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const ToggleButton = (props: any) => {
  const [activeButtonKey, setActiveButtonKey] = useState<string | null>(
    props.initial
  );

  const handleClick = (key: string) => {
    if (props.onToggle) {
      props.onToggle(key);
    }
    setActiveButtonKey(key);
  };

  return (
    <ButtonGroup variant="outline" {...props} isAttached={true}>
      {props.items?.map((x: string) => (
        <Button
          key={x}
          variant={activeButtonKey === x ? "solid" : "outline"}
          colorScheme={activeButtonKey === x ? "blue" : "gray"}
          onClick={() => handleClick(x)}
        >
          {x}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ToggleButton;
