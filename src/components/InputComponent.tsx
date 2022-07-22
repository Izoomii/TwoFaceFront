import {
  Flex,
  InputGroup,
  InputLeftAddon,
  Center,
  Input,
  Box,
} from "@chakra-ui/react";

const InputComponent = (props: {
  label: string;
  inputLeftAddon: string | JSX.Element;
  inputValue: string | number;
  onChangeFunction: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <Flex direction={"column"} width={"100%"}>
      <Box fontSize={"xl"}>{props.label}:</Box>
      <InputGroup paddingX={"1rem"} paddingY={"0.5rem"} variant={"filled"}>
        <InputLeftAddon width={"10%"} bg={"main.300"}>
          <Center width={"100%"}>{props.inputLeftAddon}</Center>
        </InputLeftAddon>
        <Input
          value={props.inputValue}
          onChange={(event) => {
            props.onChangeFunction(event.target.value);
          }}
          bg={"white"}
          focusBorderColor={"main.300"}
          border={"10"}
          _focus={{ bg: "white" }}
        />
      </InputGroup>
    </Flex>
  );
};

export default InputComponent;
