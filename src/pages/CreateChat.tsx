import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { backUrl, isAuthentified, redirectToLogin } from "../globals";

const CreateChat = () => {
  const [userEmail, setUserEmail] = useState("");
  const [image, setImage] = useState("");
  const [chatname, setChatname] = useState("");
  const [participants, setParticipants] = useState("");

  useEffect(() => {
    isAuthentified().then((user) => {
      if (!user) return redirectToLogin();
      setUserEmail(user.email);
    });
  }, []);

  const createChat = () => {
    //removes empty spaces, then splits by space, then filters empty elements
    const participantsList = participants
      .replace(/(\r\n|\n|\r)/gm, " ")
      .split(" ")
      .filter((e) => e !== "");
    participantsList.unshift(userEmail);
    axios
      .post(
        `${backUrl}/chats/create`,
        {
          image: image,
          chatname,
          participants: participantsList,
        },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  return (
    <Flex
      direction={"column"}
      width={"100%"}
      height={"100%"}
      textColor={"black"}
    >
      <input
        placeholder="Chat name"
        value={chatname}
        onChange={(event) => {
          setChatname(event.target.value);
        }}
      />
      <input
        placeholder="Participants' emails seperated by space, on god i will change this just later :sleep_emoji:"
        value={participants}
        onChange={(event) => {
          setParticipants(event.target.value);
        }}
      />

      <Button
        padding={"0.75rem"}
        bg={"blue.400"}
        onClick={() => {
          createChat();
        }}
      >
        Create Chat
      </Button>
    </Flex>
  );
};

export default CreateChat;
