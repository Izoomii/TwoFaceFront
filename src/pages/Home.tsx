import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ChatList from "../components/ChatsList";
import Main from "../components/Main";

class Home extends React.Component {
  render() {
    return (
      <Flex width={"100%"} height={"min"}>
        <Box id="leftdiv" width={"20%"} height={"100%"}>
          left side thing here
        </Box>
        <Box id="maindiv" width={"60%"} height="100%" bg={"gray.800"}>
          <Main />
        </Box>
        <Box id="chatsdiv" width={"20%"} height={"100%"}>
          <ChatList />
        </Box>
      </Flex>
    );
  }
}

export default Home;
