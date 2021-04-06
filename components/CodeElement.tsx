import React from "react";
import { CopyIcon } from "@chakra-ui/icons";
import {
  BoxProps,
  Flex,
  IconButton,
  useClipboard,
  useToast,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const CodeContainer = (props: BoxProps) => {
  return <Flex padding="2" rounded="8px" my="8" {...props} align="center" />;
};

const CopyButton = (props: any) => (
  <IconButton
    aria-label="Copy Code"
    icon={<CopyIcon />}
    zIndex="1"
    onClick={props.onClick}
    {...props}
  />
);

const CodeElement = (props: any) => {
  const toast = useToast();
  const { children } = props;
  const { onCopy } = useClipboard(children);
  const { colorMode } = useColorMode();

  const handleCopyClick = () => {
    onCopy();
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
    <CodeContainer
      p={4}
      overflow="hidden"
      bg={colorMode === "light" ? "black" : "soothingWhite"}
    >
      <Text
        flex="1"
        as="kbd"
        color={colorMode === "light" ? "soothingWhite" : "black"}
      >
        {children}
      </Text>
      {props.hideCopy ? null : (
        <CopyButton
          onClick={handleCopyClick}
          bg={colorMode === "light" ? "soothingWhite" : "black"}
        />
      )}
    </CodeContainer>
  );
};

export default CodeElement;
