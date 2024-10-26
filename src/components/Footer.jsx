import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../assets/img.jpg"

// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            This is the place where you find everything about the crypto world!
          </Text>
        </VStack>

        <VStack >
          <Avatar boxSize={"28"} mt={["4", "0"]} src={img} />
          <a href="https://priyanshusharma01.netlify.app/">
          <Text>Our Founder</Text>
          </a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
