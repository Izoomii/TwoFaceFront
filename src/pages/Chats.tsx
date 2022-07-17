import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import ChatLog from "../components/ChatLog";
import ChatList from "../components/ChatsList";
import {
  backUrl,
  ChatInterface,
  isAuthentified,
  MessageInterface,
  redirectToLogin,
} from "../globals";

class Chats extends React.Component<
  {},
  {
    message: string;
    currentChatId: string;
    chatList: ChatInterface[];
    log: MessageInterface[];
    testArray: number[];
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: "",
      currentChatId: "",
      chatList: [],
      log: [],
      testArray: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28,
      ],
    };
  }

  //test chat, accessible to izumi
  testChatId = "62c8d85718fd40b8cf5e8af0";

  async componentDidMount() {
    const user = await isAuthentified();
    if (!user) return redirectToLogin();

    axios
      .get(`${backUrl}/chats/list`, { withCredentials: true })
      .then(({ data }) => {
        const chatList = data.chatList as ChatInterface[];
        this.setState({ chatList });
      });
  }

  setCurrentChat = async (chatId: string) => {
    this.setState({ currentChatId: chatId });
    await axios
      .get(`${backUrl}/chats/log?id=${chatId}`, { withCredentials: true })
      .then(({ data }) => {
        const log = data as MessageInterface[];
        this.setState({ log });
      });
  };

  sendMessage = async () => {
    axios
      .post(
        `${backUrl}/chats/messages/create`,
        { chat_id: this.state.currentChatId, content: this.state.message },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  render(): React.ReactNode {
    return (
      <Flex width={"100%"} height={"100%"} bg={"red.100"}>
        <Box width={"20%"} bg={"gray.500"} padding={"0.5rem"}>
          {this.state.chatList.map((elem, index) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  this.setCurrentChat(elem._id);
                }}
                width={"100%"}
                marginY={"0.5rem"}
                padding={"0.75rem"}
                bg={"blue.300"}
                rounded={"lg"}
                textColor={"white"}
              >
                {elem.chatname}
              </Box>
            );
          })}
        </Box>
        <Box flexGrow={"1"} height={"100%"} padding={"0.5rem"}>
          <Flex direction={"column"} width={"100%"} height={"100%"}>
            <Box width={"100%"} flexGrow={"1"}>
              <ChatLog log={this.state.log} />
            </Box>
            <Flex width={"100%"} height={"3rem"}>
              <Input
                placeholder="Message..."
                value={this.state.message}
                onChange={(event) => {
                  this.setState({ message: event.target.value });
                }}
                flexGrow={"1"}
                height={"100%"}
                textColor={"black"}
              />
              <Button
                onClick={() => {
                  this.sendMessage();
                }}
                padding={"0.75rem"}
                bg={"blue.500"}
                height={"100%"}
              >
                Send Message
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default Chats;
