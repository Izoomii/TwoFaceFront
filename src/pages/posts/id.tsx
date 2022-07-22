import { Box, Center, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";
import {
  backUrl,
  isAuthentified,
  PostInterface,
  UserInterface,
} from "../../globals";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState<PostInterface | null>(null);
  const [connectedUser, setConnectedUser] = useState<UserInterface | null>(
    null
  );

  useEffect(() => {
    isAuthentified().then((user) => {
      setConnectedUser(user);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${backUrl}/posts/post?post_id=${params.id}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const post = data.post as PostInterface;
        if (post) setPost(post);
      });
  }, []);

  return (
    <Flex width={"full"} justifyContent={"center"}>
      <Box padding={"1.25rem"} width={"75%"}>
        {!post ? <></> : <PostCard post={post} user={connectedUser} />}
      </Box>
    </Flex>
  );
};
export default PostPage;
