import React from "react";
import axios from "axios";
import { backUrl } from "../globals";

//this feels bad, man
class CreateProfile extends React.Component<
  {},
  { username: string; email: string; password: string; name: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { username: "", email: "", password: "", name: "" };
  }

  createProfile = () => {
    //assumes all inputs are correcte bc m tired
    const userInfo = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };
    axios
      .post(`${backUrl}/users/create`, userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("Created new profile");
      });
  };

  render(): React.ReactNode {
    return (
      <div className="p-5 flex flex-col text-black">
        <input
          placeholder="Username"
          value={this.state.username}
          onChange={(event) => {
            this.setState({ username: event.target.value });
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
          placeholder="Name"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
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

export default CreateProfile;
