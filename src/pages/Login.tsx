import React from "react";
import axios from "axios";
import { backUrl, redirectToHome, UserInterface } from "../globals";
import { Button, Flex } from "@chakra-ui/react";

class Login extends React.Component<{}, { email: string; password: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { email: "", password: "" };
  }

  loginUser = () => {
    const email = this.state.email;
    const password = this.state.password;
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
        if (!authorized) return this.setState({ password: "" });
        window.location.pathname = "/";
      });
  };

  render(): React.ReactNode {
    return (
      <Flex direction={"column"} width={"33%"} textColor={"black"}>
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
        <Button
          onClick={() => {
            this.loginUser();
          }}
          padding={"0.25rem"}
          bg={"blue.500"}
          textColor={"white"}
        >
          Login
        </Button>
      </Flex>
    );
  }
}

export default Login;
