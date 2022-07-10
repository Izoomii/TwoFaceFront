import axios from "axios";
import React from "react";
import {
  backUrl,
  CommentInterface,
  PostInterface,
  UserInterface,
} from "../globals";
import Comment from "./Comment";

class CommentsList extends React.Component<
  { post: PostInterface; user: UserInterface | null },
  { commentsList: CommentInterface[]; newComment: string }
> {
  constructor(props: { post: PostInterface; user: UserInterface | null }) {
    super(props);
    this.state = { commentsList: [], newComment: "" };
  }

  componentDidMount() {
    this.getPostComments();
  }

  sendComment = async () => {
    if (!this.props.user) return;
    await axios
      .post(
        `${backUrl}/posts/comment`,
        {
          parent_id: this.props.post._id,
          parenttype: "post",
          content: this.state.newComment,
        },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ newComment: "" });
        this.getPostComments();
      });
  };

  getPostComments = async () => {
    // if (!this.props.user) return;
    await axios
      .get(
        `${backUrl}/posts/comments?parent_id=${this.props.post._id}&parenttype=post`,
        { withCredentials: true }
      )
      .then(({ data }) => {
        const commentsList = data.response as CommentInterface[];
        this.setState({ commentsList });
      });
  };

  render(): React.ReactNode {
    return (
      <div>
        <div className="w-full flex">
          <input
            placeholder="Your comment..."
            value={this.state.newComment}
            onChange={(event) => {
              this.setState({ newComment: event.target.value });
            }}
            className="grow text-black"
          />
          <button
            onClick={() => {
              this.sendComment();
            }}
            className="p-2 bg-blue-300"
          >
            Send
          </button>
        </div>
        <div className="w-full">
          {this.state.commentsList.map((elem, index) => {
            return (
              <Comment key={index} comment={elem} user={this.props.user} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CommentsList;
