import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"ghost"} color={"white"} _hover={{ bg: "grey", color: "red" }}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}  _hover={{ bg: "grey", color: "red" }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}  _hover={{ bg: "grey", color: "red" }}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
