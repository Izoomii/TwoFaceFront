import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Header from "./Header";

const Container = (props: PropsWithChildren) => {
  return (
    <Flex direction={"column"} height={"100vh"} width={"100%"} bg={"main.700"}>
      <Header />
      <Flex height={"100%"} width={"100%"} overflowY={"scroll"}>
        {props.children}
      </Flex>
    </Flex>
  );
};

export default Container;
