import axios from "axios";
import React from "react";
import ChatLog from "../components/ChatLog";
import ChatList from "../components/ChatsList";
import {
  backUrl,
  ChatInterface,
  isAuthentified,
  MessageInterface,
  redirectToLogin,
} from "../globals";

class Chats extends React.Component<
  {},
  {
    message: string;
    currentChatId: string;
    chatList: ChatInterface[];
    log: MessageInterface[];
    testArray: number[];
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: "",
      currentChatId: "",
      chatList: [],
      log: [],
      testArray: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28,
      ],
    };
  }

  //test chat, accessible to izumi
  testChatId = "62c8d85718fd40b8cf5e8af0";

  async componentDidMount() {
    const user = await isAuthentified();
    if (!user) return redirectToLogin();

    axios
      .get(`${backUrl}/chats/list`, { withCredentials: true })
      .then(({ data }) => {
        const chatList = data.chatList as ChatInterface[];
        this.setState({ chatList });
      });
  }

  setCurrentChat = async (chatId: string) => {
    this.setState({ currentChatId: chatId });
    await axios
      .get(`${backUrl}/chats/log?id=${chatId}`, { withCredentials: true })
      .then(({ data }) => {
        const log = data as MessageInterface[];
        this.setState({ log });
      });
  };

  sendMessage = async () => {
    axios
      .post(
        `${backUrl}/chats/messages/create`,
        { chat_id: this.state.currentChatId, content: this.state.message },
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
      <div className="w-full h-full flex bg-red-600">
        <div className="w-1/5 bg-slate-500 p-2">
          <div>
            {this.state.chatList.map((elem, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    this.setCurrentChat(elem._id);
                  }}
                  className="w-full my-2 p-3 bg-blue-400 rounded-lg text-white"
                >
                  {elem.chatname}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grow h-full p-2">
          <div className="w-full h-full">
            <ChatLog log={this.state.log} />
            <div className="w-full h-12 flex">
              <input
                placeholder="Message..."
                value={this.state.message}
                onChange={(event) => {
                  this.setState({ message: event.target.value });
                }}
                className="grow text-black"
              />
              <button
                onClick={() => {
                  this.sendMessage();
                }}
                className="p-3 bg-blue-600 h-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chats;
