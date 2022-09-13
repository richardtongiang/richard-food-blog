import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Text } from "../../components/Text.component";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"}>
      <Heading variant="h2">
        This is my homepage. I do things here sometimes.
      </Heading>
      <Box paddingTop={"2.5%"}>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
      </Box>
    </Flex>
  );
};
