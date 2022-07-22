import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatLog from "../components/ChatLog";
import Message from "../components/Message";
import {
  backUrl,
  ChatInterface,
  isAuthentified,
  MessageInterface,
  redirectToLogin,
} from "../globals";

const Chats = () => {
  const [message, setMessage] = useState("");
  const [currentChatId, setCurrentChatId] = useState("");
  const [chatList, setChatList] = useState<ChatInterface[]>([]);
  const [log, setLog] = useState<MessageInterface[]>([]);

  useEffect(() => {
    isAuthentified().then((user) => {
      if (!user) return redirectToLogin();
    });

    axios
      .get(`${backUrl}/chats/list`, { withCredentials: true })
      .then(({ data }) => {
        const chatList = data.chatList as ChatInterface[];
        setChatList(chatList);
      });
  }, []);

  const setCurrentChat = async (chatId: string) => {
    setCurrentChatId(chatId);
    await axios
      .get(`${backUrl}/chats/log?id=${chatId}`, { withCredentials: true })
      .then(({ data }) => {
        const log = data as MessageInterface[];
        setLog(log);
      });
  };

  const sendMessage = async () => {
    if (!currentChatId || !message) return;
    axios
      .post(
        `${backUrl}/chats/messages/create`,
        { chat_id: currentChatId, content: message },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
        setMessage("");
      });
  };

  return (
    <Flex width={"100%"} height={"100%"} bg={"main.200"}>
      <Box width={"20%"} bg={"gray.500"} padding={"0.5rem"}>
        {chatList.map((elem, index) => {
          return (
            <Box
              key={index}
              onClick={() => {
                setCurrentChat(elem._id);
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
            {/* chatlog */}
            <ChatLog log={log} />
          </Box>
          <Flex
            width={"100%"}
            height={"3rem"}
            bg={"white"}
            rounded={"xl"}
            marginTop={"2.5rem"}
          >
            <Input
              placeholder="Message..."
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              flexGrow={"1"}
              height={"100%"}
              textColor={"black"}
            />
            <Button
              onClick={() => {
                sendMessage();
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
};

export default Chats;
