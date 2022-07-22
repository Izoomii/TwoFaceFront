import { Button, Flex } from "@chakra-ui/react";
import { logoutUser } from "../globals";

const LogoutComponent = () => {
  return (
    <Button
      variant={"red.default"}
      onClick={() => {
        logoutUser();
      }}
      width={"100%"}
      height={"100%"}
      rounded={"lg"}
      fontSize={"2xl"}
    >
      Logout
    </Button>
  );
};

export default LogoutComponent;
