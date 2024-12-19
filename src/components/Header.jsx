import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../app.css';
const Header = () => {
const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    toast.success("Logout successful!");
    
    navigate("/");
  } 
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <div className="flex-box">
        <div> <Button variant={"ghost"} color={"white"} _hover={{ bg: "grey", color: "red" }}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}  _hover={{ bg: "grey", color: "red" }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"ghost"} color={"white"}  _hover={{ bg: "grey", color: "red" }}>
        <Link to="/coins">Coins</Link>
      </Button></div>
        <div>
        {localStorage.getItem("token") ?
      (<Button variant={"ghost"} color={"white"}  _hover={{ bg: "grey", color: "red" }}>
       <div onClick={handleLogout}>Logout</div>
      </Button>) :
      (<>
      </>
     )}
        </div>
      </div>
     
     
    </HStack>
  );
};

export default Header;
