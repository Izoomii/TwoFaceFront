import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthentified, UserInterface } from "../globals";
import { Box, Flex, Icon, Img } from "@chakra-ui/react";
import ProfileDropdownComponent from "./ProfileDropdownComponent";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaComments } from "react-icons/fa";

const Header = () => {
  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    isAuthentified().then((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  // ==2F====== Home dskh asdf asdf ===          Khalid

  return (
    <Flex width={"full"} height={"3.5rem"} bg={"main.800"}>
      <Flex flexGrow={"1"} height={"full"}></Flex>
      <Flex
        width={"50%"}
        bg={"blackAlpha.400"}
        height={"full"}
        justifyContent="space-evenly"
        alignItems={"center"}
        textColor={"gray.200"}
        fontSize="2xl"
        fontWeight={"bold"}
      >
        <Link to={"/"}>
          <Icon as={AiFillHome} boxSize={"32px"} />
        </Link>

        <Link to={"/friends"}>
          <Icon as={FaUserFriends} boxSize={"32px"} />
        </Link>
        <Link to={"/chats"}>
          <Icon as={FaComments} boxSize={"32px"} />
        </Link>
        <Link to={"/test"}>TEST</Link>
      </Flex>
      <Flex
        flexGrow={"1"}
        height={"full"}
        justifyContent={"end"}
        alignItems="center"
      >
        {user ? (
          <ProfileDropdownComponent user={user} />
        ) : (
          <Box fontSize={"xl"}>
            <Link to={"/login"}>Login</Link>
          </Box>
        )}
      </Flex>
    </Flex>

    // <HStack>
    //   <span>Home</span>
    //   <span>Settings</span>
    //   <span>Chats</span>
    //   <span>Tests</span>
    //   {user ? <span>{user.profilepicture}</span> : null}
    // </HStack>
  );
};
export default Header;
