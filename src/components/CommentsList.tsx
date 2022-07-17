import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import {
  backUrl,
  CommentInterface,
  PostInterface,
  UserInterface,
} from "../globals";
import Comment from "./Comment";

class CommentsList extends React.Component<
  { post: PostInterface; user: UserInterface | null },
  { commentsList: CommentInterface[]; newComment: string }
> {
  constructor(props: { post: PostInterface; user: UserInterface | null }) {
    super(props);
    this.state = { commentsList: [], newComment: "" };
  }

  componentDidMount() {
    this.getPostComments();
  }

  sendComment = async () => {
    if (!this.props.user) return;
    await axios
      .post(
        `${backUrl}/posts/comment`,
        {
          parent_id: this.props.post._id,
          parenttype: "post",
          content: this.state.newComment,
        },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ newComment: "" });
        this.getPostComments();
      });
  };

  getPostComments = async () => {
    // if (!this.props.user) return;
    await axios
      .get(
        `${backUrl}/posts/comments?parent_id=${this.props.post._id}&parenttype=post`,
        { withCredentials: true }
      )
      .then(({ data }) => {
        const commentsList = data.response as CommentInterface[];
        this.setState({ commentsList });
      });
  };

  render(): React.ReactNode {
    return (
      <Box rounded={"lg"} overflow={"hidden"} paddingY={"0.5rem"}>
        <Flex
          width={"100%"}
          rounded={"lg"}
          paddingX={"1rem"}
          paddingY={"0.5rem"}
        >
          <Flex width={"100%"} height={"100%"} rounded={"xl"}>
            <Input
              placeholder="Your comment..."
              value={this.state.newComment}
              onChange={(event) => {
                this.setState({ newComment: event.target.value });
              }}
              variant={"filled"}
              padding={"0.5rem"}
              flexGrow={"1"}
              textColor={"black"}
            />
            <Button
              onClick={() => {
                this.sendComment();
              }}
              padding={"0.5rem"}
              background={"blue.400"}
              _hover={{ background: "blue.600" }}
            >
              Send
            </Button>
          </Flex>
        </Flex>

        <Box width={"100%"} padding={"0.75rem"}>
          {/* avoids trying to map list before it is created */}
          {this.state.commentsList == undefined ? (
            <></>
          ) : (
            this.state.commentsList.map((elem, index) => {
              return (
                <Comment key={index} comment={elem} user={this.props.user} />
              );
            })
          )}
        </Box>
      </Box>
      // </div>
    );
  }
}

export default CommentsList;
