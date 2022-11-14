// import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import '../loader.css'
const Loader = () => {
  return (
    // <VStack h="90vh" justifyContent={"center"}>
    //   <Box transform={"scale(3)"}>
    //     <Spinner size={"xl"} />
    //   </Box>
    // </VStack>
    <div className="container">
    <div className="pencil">
        <div className="pencil-pointer"></div>
        <div className="pencil-cap"></div>
        <div className="pencil-cap-base"></div>
        <div className="pencil-middle"></div>
        <div className="pencil-eraser"></div>
    </div>
    <div className="line">
        
    </div>
    <h2>Loading.....</h2>
</div>
  );
};

export default Loader;
