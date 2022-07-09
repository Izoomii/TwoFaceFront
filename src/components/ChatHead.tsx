import React from "react";
import { ChatInterface } from "../globals";

class ChatHead extends React.Component<{ chatHead: ChatInterface }, {}> {
  constructor(props: { chatHead: ChatInterface }) {
    super(props);
  }

  chatHead = this.props.chatHead;

  render(): React.ReactNode {
    return (
      <div className="p-3 my-2 w-full rounded-lg bg-blue-400 flex overflow-hidden">
        <div className="mr-2 bg-red-400">{this.chatHead.image}</div>
        <div className="text-xl">{this.chatHead.chatname}</div>
      </div>
    );
  }
}

export default ChatHead;
