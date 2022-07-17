import { AspectRatio, Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { profilePicturePath, UserInterface } from "../globals";

class ProfileCard extends React.Component<{ user: UserInterface | null }, {}> {
  //this may go bad if it tries to construct while user is still null
  constructor(props: { user: UserInterface | null }) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Flex
        direction={"column"}
        width={"100%"}
        height={"100%"}
        rounded={"lg"}
        bg={"gray.700"}
        marginY={"0.5rem"}
        overflow={"hidden"}
      >
        {this.props.user ? (
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
                bg={"gray.700"}
              >
                <Box height={"100%"} flexGrow={"1"}>
                  <Box fontSize={"3xl"} fontWeight={"bold"}>
                    {this.props.user.firstname}{" "}
                    {!this.props.user.lastname ? (
                      <></>
                    ) : (
                      <Text fontSize={"3xl"} fontWeight={"thin"}>
                        {this.props.user.lastname}
                      </Text>
                    )}
                  </Box>
                  <Box fontSize={"xl"}>{this.props.user.email}</Box>
                </Box>
                <Img
                  src={`${profilePicturePath}/${this.props.user.profilepicture}`}
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
  }
}

export default ProfileCard;
