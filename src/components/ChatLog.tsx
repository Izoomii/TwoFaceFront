import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { MessageInterface } from "../globals";
import Message from "./Message";

const ChatLog = (props: { log: MessageInterface[] }) => {
  return (
    <Flex
      direction={"column"}
      height={"100%"}
      width={"100%"}
      justifyContent={"end"}
    >
      {props.log.map((elem, index) => {
        return <Message message={elem} key={index} />;
      })}
    </Flex>
  );
};

export default ChatLog;
