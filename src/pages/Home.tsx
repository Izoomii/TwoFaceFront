import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ChatList from "../components/ChatsList";
import Main from "../components/Main";

const Home = () => {
  return (
    <Flex width={"100%"} height={"min"}>
      <Box id="leftdiv" width={"25%"} height={"100%"}>
        left side thing here
      </Box>
      <Box
        id="maindiv"
        width={"50%"}
        height="100%"
        // bg={"main.700"}
        borderX={"2px"}
        borderColor={"main.100"}
      >
        <Main />
      </Box>
      <Box id="chatsdiv" width={"25%"} height={"100%"}>
        <ChatList />
      </Box>
    </Flex>
  );
};
export default Home;
