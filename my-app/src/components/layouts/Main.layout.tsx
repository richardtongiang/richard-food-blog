import { Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Flex paddingTop={"5%"} paddingLeft={"5%"}>
        <Heading variant={"h1"}>Richard's Personal Website</Heading>
      </Flex>
      <Flex paddingLeft={"5%"} paddingTop={"5%"}>
        <Flex flexDirection={"column"} paddingRight={"5%"}>
          <Link to="/">Home</Link>
          <Link to="restaurants">Restaurants</Link>
        </Flex>
        <Outlet />
      </Flex>
    </>
  );
};
