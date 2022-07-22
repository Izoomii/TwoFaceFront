import { AspectRatio, Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { profilePicturePath, UserInterface } from "../globals";

const ProfileCard = (props: { user: UserInterface | null }) => {
  return (
    <Flex
      direction={"column"}
      width={"100%"}
      height={"100%"}
      rounded={"lg"}
      bg={"main.100"}
      marginY={"0.5rem"}
      overflow={"hidden"}
    >
      {props.user ? (
        <div>
          <Box width={"100%"} height={"25%"} bg="orange.500">
            BACKGROUND
          </Box>
          <Box width={"100%"} padding={"0.75rem"}>
            <Flex
              width={"100%"}
              rounded={"lg"}
              height={"100%"}
              padding={"0.75rem"}
              bg={"blackAlpha.300"}
            >
              <Box height={"100%"} flexGrow={"1"}>
                <Box fontSize={"3xl"} fontWeight={"bold"}>
                  {props.user.firstname}{" "}
                  {!props.user.lastname ? (
                    <></>
                  ) : (
                    <Text fontSize={"3xl"} fontWeight={"thin"}>
                      {props.user.lastname}
                    </Text>
                  )}
                </Box>
                <Box fontSize={"xl"}>{props.user.email}</Box>
              </Box>
              <Img
                src={`${profilePicturePath}/${props.user.profilepicture}`}
                borderRadius={"full"}
                boxSize={"250px"}
                alt="Profile Picture"
                objectFit={"cover"}
              />
            </Flex>
          </Box>
        </div>
      ) : (
        <div>No user</div>
      )}
    </Flex>
  );
};

export default ProfileCard;
