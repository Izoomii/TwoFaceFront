import React, { PropsWithChildren } from "react";
import { isAuthentified, UserInterface } from "../globals";
import Header from "./Header";

class Container extends React.Component<PropsWithChildren, {}> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render() {
    return (
      <div className="w-screen h-screen bg-slate-800 flex flex-col ">
        <div>
          <Header />
        </div>
        <div className="w-full grow text-white overflow-y-auto">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Container;
