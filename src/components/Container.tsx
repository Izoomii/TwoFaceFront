import React, { PropsWithChildren } from "react";
import Header from "./Header";

class Container extends React.Component<PropsWithChildren, {}> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render() {
    return (
      <div className="w-screen h-screen bg-slate-800 flex flex-col ">
        <Header />
        <div className="w-full grow text-white">{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
