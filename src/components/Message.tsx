import { AspectRatio, Box, Flex, Img } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  backUrl,
  MessageInterface,
  profilePicturePath,
  UserInterface,
} from "../globals";

const Message = (props: { message: MessageInterface }) => {
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    axios
      .get(`${backUrl}/users/user?user_id=${props.message.author_id}`)
      .then(({ data }) => {
        const user = data.user as UserInterface;
        setUser(user);
      });
  }, []);

  return (
    <Flex
      width={"100%"}
      height={"min"}
      padding={"0.5rem"}
      alignItems={"center"}
    >
      <Img
        src={`${profilePicturePath}/${user?.profilepicture}`}
        boxSize={"50px"}
        objectFit={"cover"}
        rounded={"full"}
      />
      <Box
        flexGrow={"1"}
        paddingX={"2rem"}
        paddingY={"1rem"}
        bg={"white"}
        rounded={"2xl"}
        marginX={"1rem"}
      >
        {props.message.content}
      </Box>
    </Flex>
  );
};

export default Message;

// src={`${profilePicturePath}/${user?.profilepicture}`}
