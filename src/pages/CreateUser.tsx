import React from "react";
import axios from "axios";
import { backUrl, redirectToHome, UserInterface } from "../globals";
import { Button, Flex } from "@chakra-ui/react";

//this feels bad, man
class CreateUser extends React.Component<
  {},
  { firstname: string; email: string; password: string; repeatPassword: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { firstname: "", email: "", password: "", repeatPassword: "" };
  }

  createProfile = () => {
    if (
      this.state.firstname === "" ||
      this.state.email === "" ||
      this.state.password === ""
    )
      return console.log("All fields are required!");

    const userInfo = {
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword,
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

  render(): React.ReactNode {
    return (
      <Flex direction={"column"} padding={"1.25rem"} textColor={"black"}>
        <input
          placeholder="First name"
          value={this.state.firstname}
          onChange={(event) => {
            this.setState({ firstname: event.target.value });
          }}
        />
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
        />
        <input
          placeholder="Password"
          value={this.state.password}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <input
          placeholder="Repeat Password"
          value={this.state.repeatPassword}
          onChange={(event) => {
            this.setState({ repeatPassword: event.target.value });
          }}
        />
        <Button
          onClick={() => {
            this.createProfile();
          }}
          padding={"0.75rem"}
          bg={"blue.500"}
        >
          Create Profile
        </Button>
      </Flex>
    );
  }
}

export default CreateUser;
