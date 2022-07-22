import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ChatInterface } from "../globals";

const ChatHead = (props: { chatHead: ChatInterface }) => {
  const [redirect, setRedirect] = useState<boolean>(false);

  const showChat = () => {
    // // if (window.location.pathname !== "/chats") {
    // // }
    // if (this.state.redirect == false) {
    //   this.setState({ redirect: true });
    // }
    console.log("should redirect to chat log here");
  };

  return (
    <div>
      {redirect ? (
        // <Navigate to={`/chats?c=${props.chatHead._id}`} />
        <></>
      ) : (
        <Flex
          onClick={() => {
            showChat();
          }}
          padding={"0.25rem"}
          marginY={"0.5rem"}
          width={"full"}
          rounded={"lg"}
          bg={"main.500"}
        >
          <Box marginRight={"0.5rem"}>{props.chatHead.image}</Box>
          <Box fontSize={"xl"}>{props.chatHead.chatname}</Box>
        </Flex>
      )}
    </div>
  );
};

export default ChatHead;
