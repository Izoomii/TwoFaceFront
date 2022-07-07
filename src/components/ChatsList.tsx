import React from "react";
import { ChatHeadInterface } from "../globals";
import ChatHead from "./ChatHead";

class ChatList extends React.Component<{}, { chatList: ChatHeadInterface[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { chatList: [] };
  }

  componentDidMount() {
    //FOR TESTING
    this.setState({
      chatList: [
        {
          _id: "blabla",
          image: "pic1",
          chatName: "walky talky",
        },
        {
          _id: "bliblo",
          image: "pic2",
          chatName: "talk the talk",
        },
      ],
    });
  }

  render(): React.ReactNode {
    return (
      <div className="w-full h-full p-5 text-white">
        {this.state.chatList.map((elem, index) => {
          return <ChatHead chatHead={elem} key={index} />;
        })}
      </div>
    );
  }
}

export default ChatList;
