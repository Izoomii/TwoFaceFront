import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthentified, UserInterface } from "../globals";
import { Box, Center, Flex, HStack } from "@chakra-ui/react";
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
    <Flex width={"full"} height={"3.5rem"} background={"blue.900"}>
      <Flex width={"25%"} height={"full"} background="blue.400"></Flex>
      <Flex
        width={"50%"}
        height={"full"}
        justifyContent="space-evenly"
        alignItems={"center"}
        textColor={"gray.200"}
        fontSize="2xl"
        fontWeight={"bold"}
      >
        <Link to={"/"}>Home</Link>

        <Link to={"/settings"}>Settings</Link>
        <Link to={"/chats"}>Chats</Link>
        <Link to={"/test"}>TEST</Link>
      </Flex>
      <Flex
        width={"25%"}
        height={"full"}
        background="blue.400"
        justifyContent={"end"}
        alignItems="center"
      >
        {user ? (
          <Center textColor={"white"} fontSize={"2xl"} fontWeight={"bold"}>
            <Link to={`/users/${user._id}`}>{user.firstname}</Link>
          </Center>
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
