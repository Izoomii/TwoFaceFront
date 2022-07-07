import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import CreateProfile from "./pages/CreateProfile";

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
            {/* temporary */}
            <Route path="/createprofile" element={<CreateProfile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Container>
    );
  }
}

export default App;
