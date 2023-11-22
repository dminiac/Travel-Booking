import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { VscDebugRestartFrame } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import Link from "next/link";
import LoadingScreen from "../components/pre_loader/loadingScreen";
import { useEffect, useState } from "react";

const ListProperty = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
  }, []);

  return (
    <>
    {loading?
    (<Box bg="#f9f9fa" pb="6rem">
      <Box>
        <Box
          p="1rem 3rem 1rem 2rem"
          display="flex"
          bg="#003580"
          mb="1rem"
          justifyContent="space-between"
        >
          <Box>
            <Image width="200px" height="50px" alt="logo" src="applogo.png" />
          </Box>
          <Flex w="20%" justifyContent="space-evenly" color="white">
            <Image
              borderRadius="50%"
              background="none"
              width={25}
              height={25}
              alt="IND"
              src="ind.jpeg"
            />
            Help <BsQuestionCircle fontSize="1.5rem" cursor="pointer" />{" "}
            <CgProfile cursor="pointer" fontSize="1.5rem" />
          </Flex>
        </Box>
        <Box w="80%" m="auto">
          <Text fontSize="2xl" mb="1.5rem">
            List your property on Booking.com and start welcoming guests in no
            time!
          </Text>
          <Text fontSize="md" mb="1.5rem">
            To get started, choose the type of property you want to list on
            Booking.com
          </Text>

          <Box
            m="auto"
            w="25%"
            p="5px"
            mt="1rem"
            border="1px solid gray"
            bg="white"
          >
            <Flex
              alignItems="center"
              bg="green"
              color="white"
              p="5px"
              w="35%"
              flexDirection={["column", "column", "row", "row"]}
              m="auto"
              fontSize="13px"
              borderRadius="4px"
              justifyContent="space-between"
            >
              <VscDebugRestartFrame fontSize="18px" /> Quick start
            </Flex>
            <Image
              w="30%"
              h="30%"
              m="auto"
              mb="10px"
              src="https://q.bstatic.com/static/img/join/segmentation/accomm_one_apt_main@2x.png"
            />
            <Text textAlign="center" fontSize="md" fontWeight="700" mb="10px">
              Hotel, B&Bs, and more
            </Text>
            <Box w="75%" m="auto" mb="1rem">
              <Text textAlign="center" fontSize="xs">
                Furnished and self-catering accommodation, where guests rent the
                entire place.
              </Text>
            </Box>
            <Link href="/addproperty">
              <Button
                w="100%"
                bg="#0071c2"
                _hover={{ bg: "#014778" }}
                color="white"
                mb="15px"
              >
                List your property
              </Button>
            </Link>
            <Link href="/">
              <Button
                w="100%"
                border="1px solid #0071c2"
                textDecoration="none"
                _hover={{ bg: "#b7cedf" }}
                color="#014778"
                mb="15px"
              >
                Go Back
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>):( <LoadingScreen /> )}
    </>
  );
};

export default ListProperty;
