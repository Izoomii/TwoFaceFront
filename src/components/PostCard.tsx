import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Img,
  Image,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  backUrl,
  PostInterface,
  postPicturePath,
  redirectToLogin,
  UserInterface,
} from "../globals";
import CommentsList from "./CommentsList";

const PostCard = (props: {
  post: PostInterface;
  user: UserInterface | null;
}) => {
  const [likesAmount, setLikesAmount] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getLikes();
  }, []);

  const getLikes = async () => {
    if (!props.user) return;
    await axios
      .get(`${backUrl}/posts/likesamount?post_id=${props.post._id}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const amount = data.amount as number;
        setLikesAmount(amount);
      });
  };

  const likePost = async () => {
    if (!props.user) return redirectToLogin();
    await axios
      .post(
        `${backUrl}/posts/like`,
        { post_id: props.post._id },
        { withCredentials: true }
      )
      .then(({ data }) => {
        getLikes();
      });
  };

  return (
    <Flex
      direction={"column"}
      padding={"1.25rem"}
      marginBottom={"1rem"}
      width={"100%"}
      bg={"slategray"}
      rounded={"lg"}
    >
      <Flex flexGrow={"0"}>
        <Flex direction={"column"} grow={"1"}>
          <Box
            onClick={() => {
              navigate(`/posts/${props.post._id}`);
            }}
            fontSize={"2xl"}
          >
            {props.post.title}
          </Box>
          <Box textColor={"gray.200"} fontStyle={"italic"}>
            {props.post.authorname}
          </Box>
        </Flex>

        <Button
          onClick={() => {
            likePost();
          }}
          bg={"blue.400"}
          padding={"0.75rem"}
          height={"100%"}
          width={"min"}
          rounded={"lg"}
        >
          Like {likesAmount == null ? "" : `(${likesAmount})`}
        </Button>
      </Flex>
      <Box
        padding={"1.25rem"}
        width={"100%"}
        bg={"gray.700"}
        rounded={"lg"}
        textColor={"white"}
      >
        {props.post.content}
      </Box>
      {!props.post.image ? (
        <></>
      ) : (
        <Center width={"100%"}>
          <AspectRatio
            maxW={"50%"}
            minW={"50%"}
            ratio={16 / 9}
            marginY={"1rem"}
          >
            <Img
              src={`${postPicturePath}/${props.post.image}`}
              objectFit={"cover"}
              rounded={"xl"}
            />
          </AspectRatio>
        </Center>
      )}
      <Flex direction={"column"} width={"100%"} bg={"gray.600"} rounded={"lg"}>
        <CommentsList post={props.post} user={props.user} />
      </Flex>
    </Flex>
  );
};

export default PostCard;
