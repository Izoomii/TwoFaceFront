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
  const [postPage, setPostPage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getLikes();
    const path = window.location.pathname;
    if (path === `/posts/${props.post._id}`) setPostPage(true);
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

  const goToPost = () => {
    navigate(`/posts/${props.post._id}`);
  };

  return (
    <Flex
      direction={"column"}
      padding={"1.25rem"}
      marginBottom={"1rem"}
      width={"100%"}
      bg={"whiteAlpha.200"}
      border={"2px"}
      borderColor={"main.100"}
      rounded={"lg"}
    >
      <Flex flexGrow={"0"}>
        <Flex direction={"column"} grow={"1"}>
          <Box
            onClick={() => {
              goToPost();
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
          variant={"green.light"}
          onClick={() => {
            likePost();
          }}
          padding={"0.75rem"}
          height={"100%"}
          width={"min"}
          rounded={"lg"}
        >
          Like {!likesAmount ? "" : `(${likesAmount})`}
        </Button>
      </Flex>
      <Flex
        direction={"column"}
        bg={"blackAlpha.400"}
        marginBottom={"1rem"}
        rounded={"lg"}
      >
        <Box padding={"1.25rem"} width={"100%"} textColor={"black"}>
          {props.post.content}
        </Box>
        {!props.post.image ? (
          <></>
        ) : (
          <Center width={"100%"} paddingBottom={"1rem"}>
            {postPage ? (
              <Img
                src={`${postPicturePath}/${props.post.image}`}
                objectFit={"cover"}
                rounded={"xl"}
                maxH={"90vh"}
              />
            ) : (
              <AspectRatio maxW={"60%"} minW={"60%"} ratio={16 / 9}>
                <Img
                  src={`${postPicturePath}/${props.post.image}`}
                  onClick={() => {
                    goToPost();
                  }}
                  objectFit={"contain"}
                  rounded={"xl"}
                />
              </AspectRatio>
            )}
          </Center>
        )}
      </Flex>
      <Flex
        direction={"column"}
        width={"100%"}
        bg={"blackAlpha.200"}
        rounded={"lg"}
      >
        <CommentsList post={props.post} user={props.user} />
      </Flex>
    </Flex>
  );
};

export default PostCard;
