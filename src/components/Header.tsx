import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="w-full h-14 bg-blue-900 flex">
        <div className="w-1/4 h-full bg-orange-100"></div>
        <div className="w-2/4 h-full flex justify-evenly items-center text-xl">
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/settings"}>Settings</Link>
          <Link to={"/test"}>TEST</Link>
        </div>
        <div className="w-1/4 h-full bg-orange-100"></div>
      </div>
    );
  }
}
export default Header;
