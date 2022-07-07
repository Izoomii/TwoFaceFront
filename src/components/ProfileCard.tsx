import React from "react";
import { UserInterface } from "../globals";

class ProfileCard extends React.Component<{ user: UserInterface | null }, {}> {
  //this may go bad if it tries to construct while user is still null
  constructor(props: { user: UserInterface }) {
    super(props);
  }

  user = this.props.user;

  render(): React.ReactNode {
    return (
      <div className="w-full h-full rounded-lg bg-gray-700 my-2 flex flex-col overflow-hidden">
        <div className="w-full h-1/4 bg-orange-400">BACKGROUND</div>
        <div className="w-full grow p-3 rounded-lg">
          <div className="w-full h-full rounded-lg p-3 bg-gray-800">
            <div className="text-3xl font-bold">{this.user?.username}</div>
            <div className="text-xl">{this.user?.email}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
