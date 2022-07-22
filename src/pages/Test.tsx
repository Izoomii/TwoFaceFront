import { Icon, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import InputComponent from "../components/InputComponent";

import { AiFillHome } from "react-icons/ai";

const Test = () => {
  const [redirect, setRedirect] = useState(false);

  const [inputTest, setInputTest] = useState("");

  if (redirect) return <Navigate to={"/login"} />;

  return (
    <Flex direction={"column"} height={"100%"} width={"100%"}>
      <Flex width={"100%"} height={"50%"} bg={"white"}>
        <Box width={"100%"} flexGrow={"1"} bg={"main.100"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.200"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.300"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.400"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.500"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.600"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.700"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.800"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.900"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.0"}></Box>
        <Box width={"100%"} flexGrow={"1"} bg={"main.1"}></Box>
      </Flex>
      <Flex direction={"column"} flexGrow={"1"} width={"30%"}>
        <InputComponent
          label="testing"
          inputLeftAddon="T"
          inputValue={inputTest}
          onChangeFunction={setInputTest}
        />
        <Text>{inputTest}</Text>
        <Button variant={"red.default"}>Test BUTTON!!!</Button>
        <Icon as={AiFillHome} boxSize={"32px"} />
      </Flex>
    </Flex>
  );
};

export default Test;
