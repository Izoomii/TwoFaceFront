import React from "react";
import PostCard from "./PostCard";
import axios from "axios";
import {
  backUrl,
  isAuthentified,
  PostInterface,
  UserInterface,
} from "../globals";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const dummyPost = {
  _id: "asdhfaskdf",
  title: "DummyTitle",
  content: "This is dummy content yay, nay..?",
  author_id: "idaliceidk",
  authorname: "Alice",
  created_at: new Date(),
  updated_at: new Date(),
};

class Main extends React.Component<
  {},
  { posts: PostInterface[]; user: UserInterface | null }
> {
  constructor(props: {}) {
    super(props);
    this.state = { posts: [], user: null };
  }

  componentDidMount() {
    isAuthentified().then((user) => {
      this.setState({ user: user });
    });

    axios.get(`${backUrl}/posts/all`).then(({ data }) => {
      const postsArray = data.data as PostInterface[];
      this.setState({ posts: postsArray });
    });
  }

  render() {
    return (
      <Flex direction={"column"} width={"100%"} height={"100%"}>
        <Flex
          marginTop={"1rem"}
          marginX={"1.75rem"}
          padding={"1rem"}
          bg="gray.700"
          justifyContent={"center"}
          rounded={"full"}
          textColor={"white"}
          fontSize={"2xl"}
        >
          <Link to={"/createpost"}>Create a new post!</Link>
        </Flex>
        <Box padding={"1.25rem"}>
          {this.state.posts.map((elem, index) => {
            return <PostCard post={elem} user={this.state.user} key={index} />;
          })}
        </Box>
      </Flex>
    );
  }
}

export default Main;
