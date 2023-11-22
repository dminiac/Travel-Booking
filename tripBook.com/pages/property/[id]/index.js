import {
    Box,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { HiStar, HiShare } from "react-icons/hi";
  import { AiFillLike, AiOutlineHeart } from "react-icons/ai";
  import { BsTags } from "react-icons/bs";
  import { VscLocation } from "react-icons/vsc";
  import React, { useEffect, useState } from "react";
  import SearchForm from "../../../components/SearchForm";
  import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/navbarSection/navbar";
import LoadingScreen from "../../../components/pre_loader/loadingScreen";
import { PropertyModel } from "../../../models/property.model";
import { connect } from "../../../db.connect";
  
  const HotelDetails = ({ data }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    const { query } = useRouter();
    const { id } = query;
    console.log(id)
  
    return (
      <Box>
        {/* ********************************************************************************************* */}
{ loading?
  <>
       <Navbar />
        <Accordion allowToggle>
          <AccordionItem bg="#fff0e0" border="none" color="black" p="0.5rem">
            <Text textAlign="left" fontSize="lg" fontWeight="700">
              <AccordionButton ml="-25rem" _hover={{ bg: "none" }}>
                <Box as="span" flex="1">
                  Coronavirus (COVID-19) Support
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel w="80%" m="auto">
              Get the travel advice you need. Read more about possible travel
              restrictions before you go.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
  
        <Box w="80%" m="auto" mt="10px">
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
  
            <BreadcrumbItem>
              <BreadcrumbLink href="#">List of properties</BreadcrumbLink>
            </BreadcrumbItem>
  
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">HotelDetails</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
  
        {/* ********************************************************************************************* */}
  
        <Box w="80%" m="auto" mb="1rem">
          <Flex
            w="100%"
            mt="2rem"
            gap="1rem"
            flexDirection={["column", "column", "row", "row"]}
          >
            <Box>
              {" "}
              <Button w="100%" bg="#ebf3ff" mb="0.7rem">
                <BsTags />
                We Price Match
              </Button>{" "}
              <SearchForm />
            </Box>
            <Box w="95%">
              <Flex
                gap="5px"
                color="#0071c2"
                flexDirection={["column", "column", "row", "row"]}
              >
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >
                  Info & prices
                </Button>
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >
                  Facilities
                </Button>
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >
                  House rules
                </Button>
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >{`Guest Reviews ${"(rating)"}`}</Button>
              </Flex>
  
              <Flex
                fontWeight="600"
                alignItems="center"
                flexDirection={["column", "column", "row", "row"]}
              >
                <Text bg="#7f7f7f" p="3px" color="white">
                  Hotel
                </Text>
                <Flex w="70%" alignItems="center" color="#febb02" ml="10px">
                  <HiStar fontSize="22px" />
                  <HiStar fontSize="22px" />
                  <HiStar fontSize="22px" cursor="pointer" />{" "}
                  <Box
                    ml="10px"
                    p="2px"
                    color="white"
                    border="1px solid"
                    bg="#febb02"
                  >
                    {" "}
                    <AiFillLike cursor="pointer" />
                  </Box>
                  <Text
                    bg="gray.100"
                    color="black"
                    ml="10px"
                    p="3px"
                    cursor="pointer"
                  >
                    Great for two travellers
                  </Text>
                </Flex>
  
                <Flex
                  flexDirection={["column", "column", "row", "row"]}
                  fontSize="27px"
                  gap="10px"
                  justifyContent="space-evenly"
                  alignItems="center"
                  color="#0071c2"
                >
                  <AiOutlineHeart cursor="pointer" /> <HiShare cursor="pointer" />
                  <Link style={{textDecoration: "none"}} href={`/property/${id}/info`}>
                  <Button bg="#0071c2" color="white" _hover={{ bg: "#014778" }}>
                    Reserve
                  </Button>
                  </Link>
                </Flex>
              </Flex>
  
              <Text fontSize="2xl" fontWeight="700" mt="10px">
                {data.title}
              </Text>
  
              <Box>
                <Image w="100%" h="80%" src={data.imagescr} />
              </Box>
              <Flex cursor="pointer" mt="1.5rem" flexDirection={["column","column","row","row"]} justifyContent="space-evenly" >
  <Image  w={{lg:"30%" ,sm:"100%"}} src={data.extraimg1} />
  <Image  w={{lg:"30%" ,sm:"100%"}} src={data.extraimg2} />
</Flex>
            </Box>
          </Flex>
        </Box>
  
        <hr style={{ marginBottom: "1rem", borderColor: "black" }} />
  
        {/* ********************************************************************************************* */}
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          w="80%"
          m="auto"
          mt="1rem"
          mb="2rem"
          justifyContent="space-between"
          gap="2rem"
        >
          <Box w="80%">
            <Text mb="1.3rem">{data.TravelText2}</Text>
            <Text mb="1.3rem">
              {
                "Placed in the heart of Goa’s Port City just 4 km away from Dabolim Airport, La-Paz Gardens Beacon Hotel - Vasco da Gama Goa provides well appointed rooms with free WiFi access. It also houses a spacious outdoor pool and sauna facilities."
              }
            </Text>
            <Text mb="1.3rem">
              {
                "Rooms are furnished with air-conditioning, a seating area, a desk, a fan, a flat-screen TV with satellite channels and a minibar. Hot/cold shower facilities and free toiletries are included in an en suite bathroom."
              }
            </Text>
            <Text mb="1.3rem">
              {
                "Enjoy a good workout at the fitness centre or indulge in a game of table tennis while a 24-hour front desk can assist with car rentals, laundry/ironing services, currency exchange and room service."
              }
            </Text>
            <Text mb="1.3rem">
              {
                "Couples particularly like the location — they rated it 8.0 for a two-person trip."
              }
            </Text>
  
            <Text fontSize="sm" fontWeight="700">
              {
                "La-Paz Gardens Beacon Hotel - Vasco da Gama Goa has been welcoming Booking.com guests since 2 Jan 2013."
              }
            </Text>
            <Text fontSize="md" fontWeight="700">
              {"Most popular facilities"}
            </Text>
            <Flex mt="1rem">
              <Text fontSize="sm" fontWeight="700">
                {"ATM and Currency Exchange:"}
              </Text>
              Need cash? There's an ATM machine and a currency exchange service at
              this property.{" "}
            </Flex>
          </Box>
          <Box lineHeight="30px" p="1rem" h="80%" bg="#ebf3ff">
            <Text fontSize="md" fontWeight="700">
              {"Property highlights"}
            </Text>
            <Flex mt="5px">
              <VscLocation fontSize="1.5rem" />
              {"Top location: Highly rated by recent guests (8.0)"}
            </Flex>
            <Text fontSize="md" fontWeight="700">
              {"Breakfast info"}
            </Text>
            <Text mt="5px">{"Buffer"}</Text>
  
            <Box lineHeight="4rem">
            <Link style={{textDecoration: "none"}} href={`/property/${id}/info`}>
              <Button
                w="100%"
                bg="#0071c2"
                _hover={{ bg: "#014778" }}
                color="white"
              >
                Reserve
              </Button>
              </Link>
              <Button w="100%" color="#0071c2" border="1px solid #0071c2">
                Save the property
              </Button>
            </Box>
          </Box>
        </Flex>
        <hr style={{ marginBottom: "1rem", borderColor: "black" }} />)  </>:( <LoadingScreen /> )
       
        }
      </Box>
    );
  };
  
  export const getServerSideProps = async (context) => {
    const { id } = context.query;
 
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }

    const property = await PropertyModel.findOne({ _id: id });

    return {
      props: {
        data: JSON.parse(JSON.stringify(property)),
      },
    };
  };
  
  export default HotelDetails;
  