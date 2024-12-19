import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../app.css';
import Loader from "./Loader";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const timeoutId = setTimeout(() => {
      toast.info("The login process may take a while! 🙏Please wait...");
    }, 5000);

    const timeOut = setTimeout(() => {
      toast.info("It is taking longer than usual🥲 please be patient😘 Connecting to server...");
    }, 30000);

    const timeOutLast = setTimeout(() => {
      toast.info("Free Backend Server😥! Donate money for faster process😊");
    }, 60000);

    try {
      const response = await axios.post(
        "https://xcrypto-backend.onrender.com/login",
        { Email: formData.email, Password: formData.password }
      );

      localStorage.setItem("token", response.data);
      setLoading(false);
      clearTimeout(timeoutId);
      clearTimeout(timeOut);
      navigate("/");
      toast.success("Login successful!");
    } catch (err) {
      setLoading(false);
      clearTimeout(timeoutId);
      clearTimeout(timeOut);
      toast.error(err.response.data);
    }
  };

  const toggle = () => {
    navigate("/register");
  };

  return (
    <Box minW="100vw">
      {loading ? (
        <Loader />
      ) : (
        <Flex minH="40vh" bg="black" color="orange" p={0}>
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
                  Login
                </Text>
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "100%", maxWidth: "25rem" }}
                >
                  <VStack spacing={4} align="stretch">
                    <FormControl isInvalid={!!errors.email}>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        bg="black"
                        color="orange"
                        borderColor="orange"
                        focusBorderColor="orange.300"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.password}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          bg="black"
                          color="orange"
                          borderColor="orange"
                          focusBorderColor="orange.300"
                        />
                        <InputRightElement>
                          <IconButton
                            variant="ghost"
                            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Toggle password visibility"
                          />
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>

                    <Button
                      onClick={handleSubmit}
                      colorScheme="orange"
                      w="full"
                      bg="orange.500"
                      _hover={{ bg: "orange.600" }}
                      _active={{ bg: "orange.700" }}
                    >
                      Login
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
                  Don't have an account? Register
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default LoginForm;
