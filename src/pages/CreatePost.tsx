import axios from "axios";
import React from "react";
import { backUrl, isAuthentified, redirectToLogin } from "../globals";

class CreatePost extends React.Component<
  {},
  { title: string; content: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "",
      content: "",
      //add images
    };
  }

  async componentDidMount() {
    const user = isAuthentified();
    if (!user) return redirectToLogin();
  }

  createPost = () => {
    axios
      .post(
        `${backUrl}/posts/create`,
        { title: this.state.title, content: this.state.content },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  render(): React.ReactNode {
    return (
      <div className="p-2 flex flex-col text-black">
        <input
          placeholder="Title"
          value={this.state.title}
          onChange={(event) => {
            this.setState({ title: event.target.value });
          }}
        />
        <input
          placeholder="Content"
          value={this.state.content}
          onChange={(event) => {
            this.setState({ content: event.target.value });
          }}
        />
        <button
          className="p-2 bg-blue-600"
          onClick={() => {
            this.createPost();
          }}
        >
          Create Post
        </button>
      </div>
    );
  }
}

export default CreatePost;
