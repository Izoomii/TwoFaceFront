import axios from "axios";
import React from "react";
import { backUrl, CommentInterface, UserInterface } from "../globals";

class Comment extends React.Component<
  { comment: CommentInterface; user: UserInterface | null },
  { commentAuthor: string }
> {
  constructor(props: {
    comment: CommentInterface;
    user: UserInterface | null;
  }) {
    super(props);
    this.state = { commentAuthor: "" };
  }

  async componentDidMount() {
    await axios
      .get(`${backUrl}/users/user?user_id=${this.props.comment.author_id}`)
      .then(({ data }) => {
        const user = data.user as UserInterface;
        this.setState({ commentAuthor: user.firstname });
      });
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.commentAuthor}: {this.props.comment.content}
      </div>
    );
  }
}

export default Comment;
