import React from "react";
import { profilePicturePath, UserInterface } from "../globals";

class ProfileCard extends React.Component<{ user: UserInterface | null }, {}> {
  //this may go bad if it tries to construct while user is still null
  constructor(props: { user: UserInterface }) {
    super(props);
    if (props.user)
      console.log(`${profilePicturePath}/${props.user.profilepicture}`);
  }

  render(): React.ReactNode {
    return (
      <div className="w-full h-full rounded-lg bg-gray-700 my-2 flex flex-col overflow-hidden">
        {this.props.user ? (
          <div>
            <div className="w-full h-1/4 bg-orange-400">BACKGROUND</div>
            <div className="w-full grow p-3">
              <div className="w-full rounded-lg h-full p-3 bg-gray-800 flex">
                <div className="h-full grow">
                  <div className="text-3xl font-bold">
                    {this.props.user.firstname}
                  </div>
                  <div className="text-xl">{this.props.user.email}</div>
                </div>
                <div className="h-full aspect-square bg-red-600">
                  <img
                    src={`${profilePicturePath}/${this.props.user.profilepicture}`}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No user</div>
        )}
      </div>
    );
  }
}

export default ProfileCard;
