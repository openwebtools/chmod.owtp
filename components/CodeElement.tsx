import React, { useState } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Code,
  Flex,
  IconButton,
  useClipboard,
  useToast,
  Text,
} from "@chakra-ui/react";

const CodeContainer = (props: BoxProps) => (
  <Flex
    padding="2"
    rounded="8px"
    my="8"
    bg="#011627"
    {...props}
    align="center"
  />
);

const CodeElement = (props: any) => {
  const toast = useToast();
  const { children } = props;
  const [editorCode] = useState(children);

  const onCopy = () => {
    useClipboard(editorCode);
    showSuccessToast();
  };

  const showSuccessToast = () =>
    toast({
      title: "Code Copied",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

  return (
    <CodeContainer p={4} overflow="hidden">
      <Text flex="1" as="kbd">
        {children}
      </Text>
      <IconButton
        aria-label="Copy Code"
        icon={<CopyIcon />}
        zIndex="1"
        onClick={onCopy}
        {...props}
      />
    </CodeContainer>
  );
};

export default CodeElement;
