import React, { useState } from "react";
import axios from "axios";
import { backUrl, redirectToHome, UserInterface } from "../globals";
import { Button, Center, Flex } from "@chakra-ui/react";
import InputComponent from "../components/InputComponent";

//this feels bad, man

const CreateUser = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const createProfile = () => {
    if (firstname === "" || email === "" || password === "")
      return console.log("All fields are required!");

    const userInfo = {
      firstname,
      email,
      password,
      repeatPassword,
    };
    axios
      .post(`${backUrl}/users/create`, userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        console.log(data);
        const newUser = data.user as UserInterface;
        if (newUser == null) return redirectToHome(); // flip the check condition when done with testing
      });
  };

  return (
    <Center width={"100%"} height={"100%"}>
      <Flex
        direction={"column"}
        justifyContent={"space-evenly"}
        padding={"1rem"}
        width={"33%"}
        // height={"45%"}
        bg={"whiteAlpha.300"}
        rounded={"lg"}
      >
        <InputComponent
          label="First Name"
          inputLeftAddon="A"
          inputValue={firstname}
          onChangeFunction={setFirstname}
        />
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
        <InputComponent
          label="Repeat Password"
          inputLeftAddon="*"
          inputValue={repeatPassword}
          onChangeFunction={setRepeatPassword}
        />
        <Button
          variant={"green.dark"}
          onClick={() => {
            createProfile();
          }}
          padding={"0.75rem"}
          marginY={"0.75rem"}
        >
          Create Profile
        </Button>
      </Flex>
    </Center>
  );
};

export default CreateUser;
