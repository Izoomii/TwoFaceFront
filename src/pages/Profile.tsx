import React from "react";
import ProfileCard from "../components/ProfileCard";
import { UserInterface } from "../globals";

class Profile extends React.Component<{}, { user: UserInterface | null }> {
  constructor(props: {}) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    //FOR TEST
    this.setState({
      user: {
        avatar: "PIC",
        username: "Obito",
        email: "obito@mail.com",
        password: "obitothebest",
        name: "",
      },
    });
  }
  //check this
  //   componentWillUnmount() {
  //     this.setState({});
  //   }

  render() {
    return (
      <div className="w-1/2 h-1/2">
        <ProfileCard user={this.state.user} />
      </div>
    );
  }
}

export default Profile;
