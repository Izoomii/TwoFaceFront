import { Box } from "@chakra-ui/react";
import React from "react";
import { MessageInterface } from "../globals";

class ChatLog extends React.Component<{ log: MessageInterface[] }, {}> {
  constructor(props: { log: MessageInterface[] }) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <Box height={"100%"} width={"100%"}>
        {!this.props.log ? (
          <></>
        ) : (
          this.props.log.map((elem, index) => {
            return (
              <Box padding={"0.5rem"} key={index}>
                {elem.content}
              </Box>
            );
          })
        )}
      </Box>
    );
  }
}

export default ChatLog;
