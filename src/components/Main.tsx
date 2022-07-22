import React, { useEffect, useState } from "react";
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

const Main = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    isAuthentified().then((user) => {
      setUser(user);
    });

    axios.get(`${backUrl}/posts/all`).then(({ data }) => {
      const postsArray = data.data as PostInterface[];
      setPosts(postsArray);
    });
  }, []);

  return (
    <Flex direction={"column"} width={"100%"} height={"100%"}>
      <Flex
        marginTop={"1rem"}
        marginX={"1.75rem"}
        padding={"1rem"}
        bg={"main.900"}
        justifyContent={"center"}
        rounded={"full"}
        textColor={"white"}
        fontSize={"2xl"}
      >
        <Link to={"/createpost"}>Create a new post!</Link>
      </Flex>
      <Box padding={"1.25rem"}>
        {posts.map((elem, index) => {
          return <PostCard post={elem} user={user} key={index} />;
        })}
      </Box>
    </Flex>
  );
};

export default Main;
