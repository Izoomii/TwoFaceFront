import {
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { logoutUser, profilePicturePath, UserInterface } from "../globals";

const ProfileDropdownComponent = (props: { user: UserInterface }) => {
  return (
    <Menu>
      <MenuButton
        paddingY={"0.5rem"}
        paddingX={"1rem"}
        bg={"white"}
        rounded={"lg"}
        marginX={"0.5rem"}
        fontWeight={"semibold"}
      >
        <Flex
          width={"100%"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Img
            src={`${profilePicturePath}/${props.user.profilepicture}`}
            boxSize={"32px"}
            objectFit={"cover"}
            rounded={"full"}
          />
          <Center paddingX={"0.5rem"}>{props.user.firstname}</Center>
        </Flex>
      </MenuButton>
      <MenuList>
        <Link to={`/users/${props.user._id}`}>
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link to={"/settings"}>
          <MenuItem>Settings</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            logoutUser();
          }}
          textColor={"red.500"}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdownComponent;
