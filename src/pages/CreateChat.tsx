import axios from "axios";
import React from "react";
import { backUrl, isAuthentified, redirectToLogin } from "../globals";

class CreateChat extends React.Component<
  {},
  { userEmail: string; image: string; chatname: string; participants: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userEmail: "",
      image: "",
      chatname: "",
      participants: "",
    };
  }

  async componentDidMount() {
    const user = await isAuthentified();
    if (!user) return redirectToLogin();
    this.setState({ userEmail: user.email });
  }

  createChat = () => {
    const chatname = this.state.chatname;
    //removes empty spaces, then splits by space, then filters empty elements
    const participants = this.state.participants
      .replace(/(\r\n|\n|\r)/gm, " ")
      .split(" ")
      .filter((e) => e !== "");
    participants.unshift(this.state.userEmail);
    axios
      .post(
        `${backUrl}/chats/create`,
        {
          image: this.state.image,
          chatname,
          participants,
        },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  render(): React.ReactNode {
    return (
      <div className="w-full h-full flex flex-col text-black">
        <input
          placeholder="Chat name"
          value={this.state.chatname}
          onChange={(event) => {
            this.setState({ chatname: event.target.value });
          }}
        />
        <input
          placeholder="Participants' emails seperated by space, on god i will change this just later :sleep_emoji:"
          value={this.state.participants}
          onChange={(event) => {
            this.setState({ participants: event.target.value });
          }}
        />

        <button
          className="p-3 bg-blue-500"
          onClick={() => {
            this.createChat();
          }}
        >
          Create Chat
        </button>
      </div>
    );
  }
}

export default CreateChat;