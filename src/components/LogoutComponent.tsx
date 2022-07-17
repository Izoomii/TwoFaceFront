import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { backUrl, UserInterface } from "../globals";

const LogoutComponent = () => {
  const logoutUser = async () => {
    await axios
      .post(`${backUrl}/users/logout`, {}, { withCredentials: true })
      .then(({ data }) => {
        console.log(data);
        window.location.pathname = "/login";
      });
  };

  return (
    <Flex
      onClick={() => {
        logoutUser();
      }}
      width={"100%"}
      height={"100%"}
      bg={"red.500"}
      rounded={"lg"}
      textColor={"white"}
      fontSize={"2xl"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      Logout
    </Flex>
  );
};

export default LogoutComponent;
