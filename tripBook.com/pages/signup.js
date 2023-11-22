import {
  VStack,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  Link,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { BsGithub } from "react-icons/bs";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import Navbar from "../components/navbarSection/navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const signupUserReq = async () => {
    const res = await axios.post("/api/user/signup", {
      name,
      email,
      password,
    });
    console.log(res.data);
    if (res.data.user) {
      setAuth({ ...auth, isReg: res.data.user });
      console.log(auth)
      reset();
      router.push("/signin");
    }
  };

  const signupDealerReq = async () => {
    const res = await axios.post("/api/user/signup/dealer", {
      name,
      email,
      password,
    });
    console.log(res.data);
    if (res.data.user) {
      setAuth({ ...auth, isReg: res.data.user });
      console.log(auth)
      reset();
      router.push("/signin");
    }
  };

  return (
    <>
    <Navbar />
    <Box mt="80px">
      <Box w="90%" m="auto">
        <Heading
          mb="24px"
          as="h1"
          fontSize="40px"
          color="#475056"
          textAlign="center"
        >
          Create an account
        </Heading>
      </Box>
      <VStack m="30px auto 50px auto" w="350px" p="15px">
        <FormControl>
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Name
          </FormLabel>
          <Input
            onChange={({ target }) => setName(target.value)}
            mb="15px"
            type="text"
            placeholder="Type in your first and last name"
          />
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Email
          </FormLabel>
          <Input
            onChange={({ target }) => setEmail(target.value)}
            mb="15px"
            type="email"
            placeholder="Type in your email address"
          />
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Password
          </FormLabel>
          <Input
            onChange={({ target }) => setPassword(target.value)}
            mb="15px"
            type="password"
            placeholder="Type in your password"
          />
          <Input
            onClick={() => signupUserReq()}
            mb="15px"
            fontSize="14px"
            color="white"
            type="submit"
            cursor="pointer"
            value="Signup as a user"
            bg="#003B95"
            fontWeight="500"
            _hover={{ bg: "#265cad" }}
          />
          <Input
            onClick={() => signupDealerReq()}
            mb="15px"
            fontSize="14px"
            color="white"
            type="submit"
            cursor="pointer"
            value="Signup as a dealer"
            bg="#003B95"
            fontWeight="500"
            _hover={{ bg: "#265cad" }}
          />
        </FormControl>
        <Text mb="16px !important" textAlign="center">
          By signing in or creating an account, you agree with our{" "}
          <Link
            textDecoration="underline"
            fontWeight="bold"
            color="blackAlpha.800"
          >
            terms and privacy policy.
          </Link>{" "}
        </Text>
        <Box border="1px solid #ebecec" p="24px">
          <Text mb="24px" fontWeight="bold" color="blackAlpha.800">
            Or connect with
          </Text>
          <Flex gap="10px">
            <Link
              className="authlinks"
              bgColor="#1877f2"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-facebook-white.svg")'
            ></Link>
            <Link
              className="authlinks"
              bgColor="#1da1f2"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-twitter-white.svg")'
            ></Link>
            <Link
              className="authlinks"
              bgColor="#f5f5f6"
              border="1px solid #d6d8d9"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-google-color.svg")'
            ></Link>
            <Link className="authlinks" bgColor="black">
              <Flex h="100%" justifyContent="center" alignItems="center">
                <BsGithub className="apple" color="white" />
              </Flex>
            </Link>
          </Flex>
        </Box>
        <Text pt="30px" mb="16px !important">
          Are you already registered?{" "}
          <Link
            textDecoration="underline"
            fontWeight="bold"
            color="blackAlpha.800"
          >
            Log in here
          </Link>{" "}
        </Text>
        <Text w="300px" fontSize="12px" mb="16px !important" textAlign="center">
          All rights reserved. Copyright (2006 - 2022) - Booking.com™
        </Text>
      </VStack>
    </Box>
    </>
    
  );
};

export default Signup;
