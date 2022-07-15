import React from "react";
import axios from "axios";
import { backUrl, redirectToHome, UserInterface } from "../globals";

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
      });
  };

  render(): React.ReactNode {
    return (
      <div className="w-1/3 flex flex-col text-black">
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
        <button
          onClick={() => {
            this.loginUser();
          }}
          className="p-1 bg-blue-600 text-white"
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
