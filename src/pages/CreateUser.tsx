import React from "react";
import axios from "axios";
import { backUrl } from "../globals";

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
    //assumes all inputs are correcte bc m tired
    //add verifications here
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
      });
  };

  render(): React.ReactNode {
    return (
      <div className="p-5 flex flex-col text-black">
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
        <button
          onClick={() => {
            this.createProfile();
          }}
          className="p-3 bg-blue-600"
        >
          Create Profile
        </button>
      </div>
    );
  }
}

export default CreateUser;
