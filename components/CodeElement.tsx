import React, { useState } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Code,
  IconButton,
  useClipboard,
  useToast,
} from "@chakra-ui/react";

const CodeContainer = (props: BoxProps) => (
  <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />
);

const CodeElement = (props: any) => {
  const toast = useToast();
  const { children } = props;
  const [editorCode] = useState(children.trim());

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
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Code>{editorCode}</Code>
      </CodeContainer>
      <IconButton
        aria-label="Copy Code"
        icon={<CopyIcon />}
        zIndex="1"
        position="absolute"
        right="1.25em"
        top="4"
        onClick={onCopy}
        {...props}
      />
    </Box>
  );
};

export default CodeElement;
