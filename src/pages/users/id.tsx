import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FriendRequestComponent from "../../components/FriendRequestsComponent";
import LogoutComponent from "../../components/LogoutComponent";
import ProfileCard from "../../components/ProfileCard";
import { backUrl, isAuthentified, UserInterface } from "../../globals";

const UserPage = () => {
  const params = useParams();
  const [connectedUser, setConnectedUser] = useState<UserInterface | null>(
    null
  );
  const [viewedUser, setViewedUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    isAuthentified().then((user) => setConnectedUser(user));
    axios.get(`${backUrl}/users/user?user_id=${params.id}`).then(({ data }) => {
      const existingUser = data.user as UserInterface | null;
      setViewedUser(existingUser);
    });
  }, []);

  return (
    <Box width={"100%"}>
      <div>
        {connectedUser ? (
          <Box width={"50%"} height={"5rem"}>
            <LogoutComponent />
          </Box>
        ) : (
          <></>
        )}
      </div>
      <Box width={"100%"}>
        <ProfileCard user={viewedUser} />
      </Box>
      <Box width={"50%"} height={"5rem"}>
        <FriendRequestComponent
          connectedUser={connectedUser}
          viewedUser={viewedUser}
        />
      </Box>
    </Box>
  );
};

export default UserPage;
