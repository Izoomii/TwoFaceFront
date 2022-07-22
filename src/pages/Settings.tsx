import { Box, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  backUrl,
  isAuthentified,
  redirectToLogin,
  UserInterface,
} from "../globals";

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [user, setUser] = useState<UserInterface | null>(null);
  const [updatedUser, setUpdatedUser] = useState<UserInterface>({
    _id: "",
    firstname: "",
    email: "",
    password: "",
    lastname: "",
    bio: "",
    profilepicture: "",
    backgroundpicture: "",
  });
  const profilePictureRef = useRef<any>();

  useEffect(() => {
    isAuthentified().then((user) => {
      if (!user) return redirectToLogin();
      setUser(user);
      setUpdatedUser(user);
    });
  });

  const updateUserInfo = async () => {
    const formData = new FormData();
    let key: keyof UserInterface;
    for (key in updatedUser) {
      formData.append(key, updatedUser[key]);
    }

    if (profilePicture) formData.append("profilePicture", profilePicture);

    await axios
      .post(`${backUrl}/users/update`, formData, {
        // timeout: 20000,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("[KNOWN] weird Axios large file/timeout error: ", err);
      });
  };

  return (
    <Box width={"100%"} height={"100%"}>
      {!user ? (
        <div>no user</div>
      ) : (
        <Flex
          direction={"column"}
          width={"33%"}
          height={"100%"}
          textColor={"black"}
        >
          <input
            placeholder="Lastname"
            value={updatedUser.lastname}
            //nest the nest of the nest of the nest of the nest of the nest of the nest
            onChange={(event) => {
              setUpdatedUser((prev) => ({
                ...prev,
                lastname: event.target.value,
              }));
            }}
          />
          <input
            placeholder="bio"
            value={updatedUser.bio}
            onChange={(event) => {
              setUpdatedUser((prev) => ({
                ...prev,
                bio: event.target.value,
              }));
            }}
          />
          <input
            type={"file"}
            name="profilePicture"
            ref={profilePictureRef}
            onChange={() => {
              setProfilePicture(profilePictureRef.current.files[0]);
            }}
          />

          <Button
            padding={"0.5rem"}
            bg={"blue.600"}
            onClick={() => {
              updateUserInfo();
            }}
          >
            Updated Info
          </Button>
        </Flex>
      )}
    </Box>
  );
};

//   render(): React.ReactNode {

//   }
// }

export default Settings;
