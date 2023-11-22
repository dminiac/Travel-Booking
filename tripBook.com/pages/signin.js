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
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import Navbar from "../components/navbarSection/navbar";
import { AuthContext } from "../context/AuthContextProvider";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const signinReq = async () => {
    const res = await axios.post("/api/user/signin", {
      email,
      password,
    });
    console.log(res.data);
    if (res.data) {
      setAuth({ ...auth, isAuth: res.data });
      reset();
      router.push("/");
    }
  };

  useEffect(() => {
    if (auth.isReg)setEmail(auth.isReg.email);
  }, [auth]);

  return (
    <Box>
      <Navbar />
      <Box w="90%" m="auto" mt="50px">
        <Heading
          mb="24px"
          as="h1"
          fontSize="40px"
          color="#475056"
          textAlign="center"
        >
          Sign in to your account
        </Heading>
      </Box>
      <VStack m="30px auto 50px auto" w="350px" p="15px">
        <FormControl>
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Email
          </FormLabel>
          <Input
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            mb="15px"
            type="email"
            placeholder="Type in your email address"
          />
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Password
          </FormLabel>
          <Input
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            mb="15px"
            type="password"
            placeholder="Type in your password"
          />
          <Input
            onClick={() => signinReq()}
            mb="15px"
            fontSize="14px"
            color="white"
            type="submit"
            cursor="pointer"
            value="Continue with email"
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
        <Text mb="16px !important">
          Don’t have an account yet?{" "}
          <Link
            textDecoration="underline"
            fontWeight="bold"
            color="blackAlpha.800"
          >
            Sign up here!
          </Link>{" "}
        </Text>
        <Text w="300px" fontSize="12px" mb="16px !important" textAlign="center">
          All rights reserved. Copyright (2006 - 2022) - Booking.com™
        </Text>
      </VStack>
    </Box>
  );
};

export default Signin;
