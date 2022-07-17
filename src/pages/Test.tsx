import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  backUrl,
  isAuthentified,
  redirectToLogin,
  UserInterface,
} from "../globals";

const Test = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    isAuthentified().then((user) => {
      if (user === null) setRedirect(true);
    });
  });

  if (redirect) return <Navigate to={"/login"} />;

  return (
    <Box width={"100%"} height={"100%"} bg={"white"}>
      <Box width={"100%"} height={"10%"} bg={"ariana.100"}></Box>
      <Box width={"100%"} height={"10%"} bg={"ariana.200"}></Box>
      <Box width={"100%"} height={"10%"} bg={"ariana.300"}></Box>
    </Box>
  );
};

export default Test;
