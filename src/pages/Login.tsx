import React, { useState } from "react";
import axios from "axios";
import { backUrl, redirectToHome, UserInterface } from "../globals";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios
      .post(
        `${backUrl}/users/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
        const authorized = data.authorized as boolean;
        if (!authorized) return setPassword("");
        window.location.pathname = "/";
      });
  };

  return (
    <Center width={"100%"} height={"100%"}>
      <Flex
        direction={"column"}
        width={"33%"}
        height={"33%"}
        bg={"whiteAlpha.300"}
        textColor={"black"}
        rounded={"lg"}
        padding={"1.5rem"}
        justifyContent={"space-evenly"}
      >
        <InputComponent
          label="Email"
          inputLeftAddon="@"
          inputValue={email}
          onChangeFunction={setEmail}
        />
        <InputComponent
          label="Password"
          inputLeftAddon="*"
          inputValue={password}
          onChangeFunction={setPassword}
        />
        <Flex direction={"column"}>
          <Button
            onClick={() => {
              loginUser();
            }}
            padding={"0.25rem"}
            bg={"main.500"}
            textColor={"white"}
            _hover={{ textColor: "main.500", bg: "main.300" }}
          >
            Login
          </Button>
          <Center>
            <Link to={"/createuser"}>
              <Text as={"u"} textColor={"main.500"}>
                or make a new account
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Login;
