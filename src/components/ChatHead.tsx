import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { ChatInterface } from "../globals";

class ChatHead extends React.Component<
  { chatHead: ChatInterface },
  { redirect: boolean }
> {
  constructor(props: { chatHead: ChatInterface }) {
    super(props);
    this.state = { redirect: false };
  }

  chatHead = this.props.chatHead;

  showChat = () => {
    // // if (window.location.pathname !== "/chats") {
    // // }
    // if (this.state.redirect == false) {
    //   this.setState({ redirect: true });
    // }
    console.log("should redirect to chat log here");
  };

  render(): React.ReactNode {
    if (this.state.redirect) {
      // return <Navigate to={`/chats?c=${this.chatHead._id}`} />;
    } else {
      return (
        <Flex
          onClick={() => {
            this.showChat();
          }}
          padding={"0.25rem"}
          marginY={"0.5rem"}
          width={"full"}
          rounded={"lg"}
          background={"blue.400"}
        >
          <Box marginRight={"0.5rem"}>{this.chatHead.image}</Box>
          <Box fontSize={"xl"}>{this.chatHead.chatname}</Box>
        </Flex>
      );
    }
  }
}

export default ChatHead;
