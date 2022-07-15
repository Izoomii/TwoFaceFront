import axios from "axios";
import { backUrl, UserInterface } from "../globals";

const LogoutComponent = () => {
  const logoutUser = async () => {
    await axios
      .post(`${backUrl}/users/logout`, {}, { withCredentials: true })
      .then(({ data }) => {
        console.log(data);
      });
  };

  return (
    <button
      onClick={() => {
        logoutUser();
      }}
      className="w-full h-full bg-red-600 hover:bg-red-700 rounded-lg text-2xl text-white flex justify-center items-center"
    >
      Logout
    </button>
  );
};

export default LogoutComponent;
