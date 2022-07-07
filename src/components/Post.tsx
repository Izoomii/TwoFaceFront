import React from "react";
import { PostInterface } from "../globals";

class Post extends React.Component<{ post: PostInterface }, {}> {
  constructor(props: { post: PostInterface }) {
    super(props);
  }
  post = this.props.post;

  render(): React.ReactNode {
    return (
      <div className="p-5 my-4 w-full bg-slate-600 flex flex-col rounded-lg">
        <div className="flex flex-col">
          <div className="text-2xl">{this.post.title}</div>
          <div className="text-slate-300 italic">{this.post.author}</div>
        </div>
        <div className="p-5 w-full bg-slate-700 rounded-lg">
          {this.post.content}
        </div>
      </div>
    );
  }
}

export default Post;
