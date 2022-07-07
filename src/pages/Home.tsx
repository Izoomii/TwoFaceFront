import React from "react";
import ChatList from "../components/ChatsList";
import Main from "../components/Main";

class Home extends React.Component {
  render() {
    return (
      <div className="w-full h-full flex">
        <div id="leftdiv" className="w-1/5 h-full">
          left side thing here
        </div>
        <div id="maindiv" className="w-3/5 h-full bg-slate-900">
          <Main />
        </div>
        <div id="messagediv" className="w-1/5 h-full">
          <ChatList />
        </div>
      </div>
    );
  }
}

export default Home;
