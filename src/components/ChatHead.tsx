import React from "react";
import { Navigate } from "react-router-dom";
import { ChatInterface } from "../globals";

class ChatHead extends React.Component<
  { chatHead: ChatInterface },
  { redirect: boolean }
> {
  constructor(props: { chatHead: ChatInterface }) {
    super(props);
    this.state = { redirect: false };
  }

  chatHead = this.props.chatHead;

  showChat = () => {
    // // if (window.location.pathname !== "/chats") {
    // // }
    // if (this.state.redirect == false) {
    //   this.setState({ redirect: true });
    // }
    console.log("should redirect to chat log here");
  };

  render(): React.ReactNode {
    if (this.state.redirect) {
      // return <Navigate to={`/chats?c=${this.chatHead._id}`} />;
    } else {
      return (
        <div
          onClick={() => {
            this.showChat();
          }}
          className="p-3 my-2 w-full rounded-lg bg-blue-400 flex overflow-hidden"
        >
          <div className="mr-2 bg-red-400">{this.chatHead.image}</div>
          <div className="text-xl">{this.chatHead.chatname}</div>
        </div>
      );
    }
  }
}

export default ChatHead;
