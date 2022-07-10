import axios from "axios";
import React from "react";
import {
  backUrl,
  PostInterface,
  redirectToLogin,
  UserInterface,
} from "../globals";
import CommentsList from "./CommentsList";

class Post extends React.Component<
  { post: PostInterface; user: UserInterface | null },
  { likesAmount: number | null }
> {
  constructor(props: { post: PostInterface; user: UserInterface | null }) {
    super(props);
    this.state = { likesAmount: null };
  }

  componentDidMount() {
    this.getLikes();
  }

  getLikes = async () => {
    if (!this.props.user) return;
    await axios
      .get(`${backUrl}/posts/likesamount?post_id=${this.props.post._id}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const amount = data.amount as number;
        this.setState({ likesAmount: amount });
      });
  };

  likePost = async () => {
    if (!this.props.user) return redirectToLogin();
    await axios
      .post(
        `${backUrl}/posts/like`,
        { post_id: this.props.post._id },
        { withCredentials: true }
      )
      .then(({ data }) => {
        console.log(data);
        this.getLikes();
      });
  };

  render(): React.ReactNode {
    return (
      <div className="p-5 my-4 w-full bg-slate-600 flex flex-col rounded-lg">
        <div className="flex flex-col">
          <div className="text-2xl">{this.props.post.title}</div>
          <div className="text-slate-300 italic">
            {this.props.post.authorname}
          </div>
        </div>
        <div className="p-5 w-full bg-slate-700 rounded-lg">
          {this.props.post.content}
        </div>
        <div className="w-full bg-slate-500 rounded-lg flex flex-col">
          <button
            onClick={() => {
              this.likePost();
            }}
            className="bg-blue-400 p-2 h-full"
          >
            Like{" "}
            {this.state.likesAmount == null
              ? ""
              : `(${this.state.likesAmount})`}
          </button>
          <div>
            <CommentsList post={this.props.post} user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
