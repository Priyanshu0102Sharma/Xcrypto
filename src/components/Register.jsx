import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; // Import icons
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";



const RegisterForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Name) newErrors.Name = "Name is required";
    if (!formData.Email.includes("@")) newErrors.Email = "Invalid Email address";
    if (formData.Password.length < 6)
      newErrors.Password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "https://xcrypto-backend.onrender.com/register",
        { Email: formData.Email, Password: formData.Password }
      );
      setLoading(false);
      toast.success("Register successful!");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data);
    }
  };

  const toggle = () => {
    navigate("/login");
  };

  return (

    <div className="flex-box">
      {loading? (<Loader />):(<Flex minH="40vh" bg="black" color="orange" p={0}>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="black"
          px={8}
          py={12}
        >
          <Box
            p={3}
            rounded="md"
            className="animation-div"
            border="2px solid"
            borderColor="transparent"
          >
            <Box bg="black" p={6} borderRadius="md" shadow="lg">
              <Text fontSize="3xl" fontWeight="bold" mb={6} textAlign="center">
                Register
              </Text>
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%", maxWidth: "25rem" }}
              >
                <VStack spacing={4} align="stretch">
                  <FormControl isInvalid={!!errors.Name}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      bg="black"
                      color="orange"
                      borderColor="orange"
                      focusBorderColor="orange.300"
                    />
                    <FormErrorMessage>{errors.Name}</FormErrorMessage>
                  </FormControl>
  
                  <FormControl isInvalid={!!errors.Email}>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="Email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      bg="black"
                      color="orange"
                      borderColor="orange"
                      focusBorderColor="orange.300"
                    />
                    <FormErrorMessage>{errors.Email}</FormErrorMessage>
                  </FormControl>
  
                  <FormControl isInvalid={!!errors.Password}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        placeholder="Enter your Password"
                        bg="black"
                        color="orange"
                        borderColor="orange"
                        focusBorderColor="orange.300"
                      />
                      <InputRightElement>
                        <Button
                          size="sm"
                          variant="ghost"
                          color="orange"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.Password}</FormErrorMessage>
                  </FormControl>
  
                  <Button
                    type="submit"
                    colorScheme="orange"
                    w="full"
                    bg="orange.500"
                    _hover={{ bg: "orange.600" }}
                    _active={{ bg: "orange.700" }}
                  >
                    Register
                  </Button>
                </VStack>
              </form>
              <Link
                color="orange.300"
                mt={4}
                py={4}
                textAlign="center"
                onClick={toggle}
              >
                Already have an account? Login
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>)}
    </div>
  );
};

export default RegisterForm;
