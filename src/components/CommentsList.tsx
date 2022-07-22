import { Box, Button, Center, Divider, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  backUrl,
  CommentInterface,
  PostInterface,
  UserInterface,
} from "../globals";
import Comment from "./Comment";

const CommentsList = (props: {
  post: PostInterface;
  user: UserInterface | null;
}) => {
  const [commentsList, setCommentsList] = useState<CommentInterface[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const sendComment = async () => {
    if (!props.user) return;
    if (!newComment) return console.log("comment empty");
    await axios
      .post(
        `${backUrl}/posts/comment`,
        {
          parent_id: props.post._id,
          parenttype: "post",
          content: newComment,
        },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
        setNewComment("");
        getPostComments();
      });
  };

  const getPostComments = async () => {
    // if (!this.props.user) return;
    await axios
      .get(
        `${backUrl}/posts/comments?parent_id=${props.post._id}&parenttype=post`,
        { withCredentials: true }
      )
      .then(({ data }) => {
        const commentsList = data.response as CommentInterface[];
        setCommentsList(commentsList);
      });
  };

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <Flex
      direction={"column"}
      rounded={"lg"}
      overflow={"hidden"}
      paddingY={"0.5rem"}
    >
      <Flex width={"100%"} rounded={"lg"} paddingX={"1rem"} paddingY={"0.5rem"}>
        <Flex width={"100%"} height={"100%"} rounded={"xl"}>
          <Input
            placeholder="Your comment..."
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                sendComment();
              }
            }}
            variant={"filled"}
            padding={"0.5rem"}
            flexGrow={"1"}
            textColor={"black"}
          />
          {/* <Button
            variant={"green.light"}
            onClick={() => {
              sendComment();
            }}
            padding={"0.5rem"}
          >
            Send
          </Button> */}
        </Flex>
      </Flex>
      <Center width={"100%"} marginTop={"0.75rem"}>
        <Divider borderColor={"main.200"} width={"95%"} />
      </Center>
      {!commentsList || !(commentsList.length > 0) ? (
        <Box margin={"1rem"} padding={"0.5rem"} bg={"main.100"} rounded={"lg"}>
          No Comments here yet
        </Box>
      ) : (
        <Flex direction={"column"}>
          <Box width={"100%"} padding={"0.75rem"}>
            {/* avoids trying to map list before it is created */}
            {commentsList.map((elem, index) => {
              return <Comment key={index} comment={elem} user={props.user} />;
            })}
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default CommentsList;
