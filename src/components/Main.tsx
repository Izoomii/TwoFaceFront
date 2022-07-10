import React from "react";
import Post from "./Post";
import axios from "axios";
import {
  backUrl,
  isAuthentified,
  PostInterface,
  UserInterface,
} from "../globals";

const dummyPost = {
  _id: "asdhfaskdf",
  title: "DummyTitle",
  content: "This is dummy content yay, nay..?",
  author_id: "idaliceidk",
  authorname: "Alice",
  created_at: new Date(),
  updated_at: new Date(),
};

class Main extends React.Component<
  {},
  { posts: PostInterface[]; user: UserInterface | null }
> {
  constructor(props: {}) {
    super(props);
    this.state = { posts: [], user: null };
  }

  async componentDidMount() {
    const user = await isAuthentified();
    if (user) this.setState({ user: user });

    axios.get(`${backUrl}/posts/all`).then(({ data }) => {
      const postsArray = data.data as PostInterface[];
      this.setState({ posts: postsArray });
    });
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="p-5">
          {this.state.posts.map((elem, index) => {
            return <Post post={elem} user={this.state.user} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
