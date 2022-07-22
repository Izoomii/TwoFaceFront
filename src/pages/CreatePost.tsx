import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { backUrl, isAuthentified, redirectToLogin } from "../globals";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef<any>();

  useEffect(() => {
    isAuthentified().then((user) => {
      if (!user) return redirectToLogin();
    });
  }, []);

  const createPost = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("postImage", image);
    axios
      .post(`${backUrl}/posts/create`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log(data);
      });
  };

  return (
    <Flex direction={"column"} padding={"0.5rem"} textColor={"black"}>
      <input
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        placeholder="Content"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <input
        type={"file"}
        ref={imageRef}
        onChange={() => {
          setImage(imageRef.current.files[0]);
        }}
      />
      <Button
        padding={"0.5rem"}
        bg={"blue.500"}
        onClick={() => {
          createPost();
        }}
      >
        Create Post
      </Button>
    </Flex>
  );
};

export default CreatePost;
