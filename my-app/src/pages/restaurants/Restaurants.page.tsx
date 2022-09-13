import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Restaurants = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"} width={"100%"}>
      <Heading variant={"h2"}>Restaurants Page</Heading>
      <Button
        onClick={() => {
          navigate("/");
          console.log("Helo");
        }}
      >
        Home
      </Button>
    </Flex>
  );
};
