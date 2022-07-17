import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { backUrl, ChatInterface, UserInterface } from "../globals";
import ChatHead from "./ChatHead";

class ChatList extends React.Component<{}, { chatList: ChatInterface[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { chatList: [] };
  }

  componentDidMount() {
    axios
      .get(`${backUrl}/users/whoami`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const user = data.user as UserInterface;
        if (user) {
          axios
            .get(`${backUrl}/chats/list`, {
              withCredentials: true,
            })
            .then(({ data }) => {
              const chatList = data.chatList as ChatInterface[];
              this.setState({ chatList });
            });
        }
      });
  }

  render(): React.ReactNode {
    return (
      <Box
        width={"100%"}
        height={"100%"}
        padding={"1.25rem"}
        textColor={"white"}
      >
        {this.state.chatList.map((elem, index) => {
          return <ChatHead chatHead={elem} key={index} />;
        })}
      </Box>
    );
  }
}

export default ChatList;
