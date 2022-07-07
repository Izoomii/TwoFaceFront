import React, { PropsWithChildren } from "react";

class Container extends React.Component<PropsWithChildren, {}> {
  constructor(props: PropsWithChildren) {
    super(props);
  }

  render() {
    return (
      <div className="w-screen h-screen bg-slate-800 flex flex-col ">
        {this.props.children}
      </div>
    );
  }
}

export default Container;
