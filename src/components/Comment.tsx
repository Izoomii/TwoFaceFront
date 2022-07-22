import { AspectRatio, Box, Flex, Img } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  backUrl,
  CommentInterface,
  profilePicturePath,
  UserInterface,
} from "../globals";

const Comment = (props: {
  comment: CommentInterface;
  user: UserInterface | null;
}) => {
  const [commentUser, setCommentUser] = useState<UserInterface>();

  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    await axios
      .get(`${backUrl}/users/user?user_id=${props.comment.author_id}`)
      .then(({ data }) => {
        const user = data.user as UserInterface;
        if (!user) return;
        setCommentUser(user);
      })
      .catch((err) => {
        console.error("Comment request had a problem");
      });
  };
  return (
    <Flex
      width={"100%"}
      height={"min"}
      padding={"0.5rem"}
      alignItems={"center"}
    >
      <Img
        src={`${profilePicturePath}/${commentUser?.profilepicture}`}
        boxSize={"32px"}
        objectFit={"cover"}
        rounded={"full"}
      />

      <Box
        flexGrow={"1"}
        paddingX={"1rem"}
        paddingY={"0.5rem"}
        bg={"white"}
        rounded={"xl"}
        marginX={"0.25rem"}
      >
        {props.comment.content}
      </Box>
    </Flex>
  );
};

export default Comment;
