import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Chats from "./pages/Chats";

import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import CreatePost from "./pages/CreatePost";
import CreateChat from "./pages/CreateChat";
import UserIndex from "./pages/users";
import UserPage from "./pages/users/id";
import PostsIndex from "./pages/posts";
import PostPage from "./pages/posts/id";

//https://stackoverflow.com/a/72072443/19483118

class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserIndex />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/posts" element={<PostsIndex />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createchat" element={<CreateChat />} />
        </Routes>
      </Container>
    );
  }
}

export default App;
