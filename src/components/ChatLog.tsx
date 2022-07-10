import React from "react";
import { MessageInterface } from "../globals";

class ChatLog extends React.Component<{ log: MessageInterface[] }, {}> {
  constructor(props: { log: MessageInterface[] }) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        {this.props.log.map((elem, index) => {
          return (
            <div className="p-2" key={index}>
              {elem.content}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChatLog;
