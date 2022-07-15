import axios from "axios";
import React from "react";
import {
  backUrl,
  isAuthentified,
  redirectToLogin,
  UserInterface,
} from "../globals";

class Settings extends React.Component<
  {},
  {
    profilePicture: string;
    user: UserInterface | null;
    updatedUser: UserInterface;
  }
> {
  profilePictureRef: React.RefObject<any>; //enforce type

  constructor(props: {}) {
    super(props);
    this.state = {
      profilePicture: "", //image uploaded
      user: null,
      updatedUser: {
        _id: "",
        firstname: "",
        email: "",
        password: "",
        lastname: "",
        bio: "",
        profilepicture: "",
        backgroundpicture: "",
      },
    };
    this.profilePictureRef = React.createRef();
  }

  async componentDidMount() {
    try {
      const user = await isAuthentified();
      if (!user) return redirectToLogin();
      this.setState({ user: user, updatedUser: user });
    } catch {
      console.log("bruh");
    }
  }

  updateUserInfo = async () => {
    const updatedUser = this.state.updatedUser;
    const formData = new FormData();
    let key: keyof UserInterface;
    for (key in updatedUser) {
      formData.append(key, updatedUser[key]);
    }
    if (this.state.profilePicture)
      formData.append("profilePicture", this.state.profilePicture);
    try {
      await axios
        .post(`${backUrl}/users/update`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then(({ data }) => {
          console.log(data);
        });
    } catch (err) {
      console.log("[KNOWN] weird Axios large file/timeout error: ", err);
    }
  };

  render(): React.ReactNode {
    return (
      <div className="w-full h-full">
        {!this.state.user ? (
          <div>no user</div>
        ) : (
          <div className="w-1/3 h-full text-black flex flex-col">
            <input
              placeholder="Lastname"
              value={this.state.updatedUser.lastname}
              //nest the nest of the nest of the nest of the nest of the nest of the nest
              onChange={(event) => {
                this.setState((prevState) => ({
                  updatedUser: {
                    ...prevState.updatedUser,
                    lastname: event.target.value,
                  },
                }));
              }}
            />
            <input
              placeholder="bio"
              value={this.state.updatedUser.bio}
              onChange={(event) => {
                this.setState((prevState) => ({
                  updatedUser: {
                    ...prevState.updatedUser,
                    bio: event.target.value,
                  },
                }));
              }}
            />
            <input
              type={"file"}
              name="profilePicture"
              ref={this.profilePictureRef}
              onChange={() => {
                this.setState({
                  profilePicture: this.profilePictureRef.current.files[0],
                });
              }}
            />

            <button
              className="p-2 bg-blue-700"
              onClick={() => {
                this.updateUserInfo();
              }}
            >
              Updated Info
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Settings;
