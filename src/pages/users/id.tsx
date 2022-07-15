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
    <div>
      <div>
        {connectedUser ? (
          <div className="w-1/2 h-20">
            <LogoutComponent />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <ProfileCard user={viewedUser} />
      </div>
      <div className="w-1/2 h-40">
        <FriendRequestComponent
          connectedUser={connectedUser}
          viewedUser={viewedUser}
        />
      </div>
    </div>
  );
};

export default UserPage;
