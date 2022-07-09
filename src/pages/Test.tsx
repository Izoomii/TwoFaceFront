import axios from "axios";
import React from "react";
import { isAuthentified } from "../globals";

class Test extends React.Component<{}, { testvar: any }> {
  constructor(props: {}) {
    super(props);
    this.state = { testvar: "" };
  }
  async componentDidMount() {
    const user = await isAuthentified();
    console.log(user);
  }

  render(): React.ReactNode {
    return <div>test page</div>;
  }
}

export default Test;
