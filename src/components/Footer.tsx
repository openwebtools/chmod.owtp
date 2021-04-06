import { Text, Link, Center } from "@chakra-ui/react";
import React from "react";
import OwtIcon from "./OwtIcon";

const Footer = () => {
  return (
    <Center>
      <Text>
        <Link href="https://openweb.tools">
          <OwtIcon w={8} h={8} />
          {" | Open Web Tools © "}
          {new Date().getFullYear()}
        </Link>
      </Text>
    </Center>
  );
};

export default Footer;
