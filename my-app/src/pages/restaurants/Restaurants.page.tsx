import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Restaurants = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"} width={"100%"}>
      <Heading variant={"h2"}>
        These are my favorite restaurants I've eaten at hehe.
      </Heading>

      <Flex paddingTop={"2.5%"}>
        <Flex paddingRight={"2.5%"} flexDirection={"column"}>
          <Heading variant={"h3"}>Sushi Yasaka</Heading>
          <Text variant={"b1"}>
            This is my favorite sushi place ever it's in NYC.
          </Text>
        </Flex>
        <Image width={"50%"} src={"/assets/sushi_yasaka.jpg"}></Image>
      </Flex>
      <Box>
        <Button
          onClick={() => {
            navigate("/");
            console.log("Helo");
          }}
        >
          Home
        </Button>
      </Box>
    </Flex>
  );
};
