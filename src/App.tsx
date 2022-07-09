import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import CreatePost from "./pages/CreatePost";
import CreateChat from "./pages/CreateChat";

//https://stackoverflow.com/a/72072443/19483118

class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header />
        <div className="w-full grow text-white">
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/createchat" element={<CreateChat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Container>
    );
  }
}

export default App;
