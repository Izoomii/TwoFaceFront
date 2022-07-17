import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Header from "./Header";

class Container extends React.Component<PropsWithChildren, {}> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render() {
    return (
      <Flex
        direction={"column"}
        height={"100vh"}
        width={"100%"}
        background="gray.500"
        // bg={"ariana.600"}
      >
        <Header />
        <Flex height={"100%"} width={"100%"} overflowY={"scroll"}>
          {this.props.children}
        </Flex>
      </Flex>
    );
  }
}

export default Container;
