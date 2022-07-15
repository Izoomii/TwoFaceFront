import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthentified, UserInterface } from "../globals";

const Header = () => {
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    isAuthentified().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="w-full h-14 bg-blue-900 flex">
      <div className="w-1/4 h-full bg-orange-100"></div>
      <div className="w-2/4 h-full flex justify-evenly items-center text-xl">
        <Link to={"/"}>Home</Link>
        <Link to={`/users/${user === null ? "" : `${user._id}`}`}>Profile</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/settings"}>Settings</Link>
        <Link to={"/chats"}>Chats</Link>
        <Link to={"/test"}>TEST</Link>
      </div>
      <div className="w-1/4 h-full p-3 bg-slate-600 flex justify-end items-center">
        <div>{user !== null ? `${user.firstname}` : ""}</div>
      </div>
    </div>
  );
};
export default Header;
