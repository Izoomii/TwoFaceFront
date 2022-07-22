import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  backUrl,
  ChatInterface,
  isAuthentified,
  UserInterface,
} from "../globals";
import ChatHead from "./ChatHead";

const ChatList = () => {
  const [chatList, setChatList] = useState<ChatInterface[]>([]);

  useEffect(() => {
    isAuthentified().then((user) => {
      if (user) {
        axios
          .get(`${backUrl}/chats/list`, {
            withCredentials: true,
          })
          .then(({ data }) => {
            const chatList = data.chatList as ChatInterface[];
            setChatList(chatList);
          });
      }
    });
  }, []);

  return (
    <Box width={"100%"} height={"100%"} padding={"1.25rem"} textColor={"white"}>
      {chatList.map((elem, index) => {
        return <ChatHead chatHead={elem} key={index} />;
      })}
    </Box>
  );
};

export default ChatList;
