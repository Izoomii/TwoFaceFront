import React from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import { backUrl, UserInterface } from "../globals";

class Profile extends React.Component<{}, { user: UserInterface | null }> {
  constructor(props: {}) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    axios
      .get(`${backUrl}/users/whoami`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const user = data.user as UserInterface;
        this.setState({ user });
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
