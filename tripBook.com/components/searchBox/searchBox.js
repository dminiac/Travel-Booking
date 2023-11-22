import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import DatePicker from "../DatePicker";
import Link from "next/link"; 
import { GuestContext } from "../../context/GuestContext";

const SearchBox = () => {
  const [inputData , setInputData] = useState("");
  return (
    <>
      <Box
        width={"100%"}
        backgroundColor={"#003580"}
        //  height={"200px"}
        height={{
          base: "150px",
          sm: "160px",
          md: "200px",
          lg: "200px",
          xl: "200px",
          "2xl": "200px",
        }}
        //  border={{ base:"8px solid red", sm:'5px solid green', md: '2px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
        pt="35px"
      >
        <Box width={"95%"} margin={"auto"}>
          <Text
            color={"white"}
            fontSize={["20px", "25px", "30px", "45px"]}
            textAlign={"start"}
            fontWeight="bold"
          >
            Find your next stay
          </Text>
          <Text
            color={"white"}
            fontSize={["12px", "15px", "18px", "22px"]}
            textAlign={"start"}
          >
            Search low prices on hotels, homes and much more...
          </Text>
        </Box>
      </Box>
      <Box
        display={{
          base: "block",
          sm: "block",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        width={{
          base: "",
          sm: "100%",
          md: "98%",
          lg: "",
          xl: "88%",
          "2xl": "90%",
        }}
        //  border={{ base:"8px solid red", sm:'5px solid green', md: '2px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
        margin={"auto"}
        marginTop={"-20px"}
        backgroundColor={"white"}
        height={"auto"}
        border="4px solid #FEBB02"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon marginTop={"10px"} color={"gray.400"} />}
          />
          <Input
            type="tel"
            placeholder="Where are you going?"
            borderRight={"4px solid #FEBB02"}
            height="50px"
            borderRadius={"0px"}
            onChange={({target}) => setInputData(target.value)}
          />
        </InputGroup>
        <Box alignItems={"center"} borderRight={"4px solid #FEBB02"} display={"flex"}>
          <DatePicker />          
        </Box>
        {/*  */}
        <Pop />
        <Link style={{textDecoration: "none"}} href={`/property?city=${inputData}`}>
        <Button
          paddingLeft={"60px"}
          paddingRight={"60px"}
          height={"50px"}
          colorScheme="blue"
          fontSize={{ sm: "20px" }}
          width={{
            base: "100%",
            sm: "100%",
            md: "100px",
            lg: "100px",
            xl: "100px",
            "2xl": "100px",
          }}
          borderRadius="0"
          fontWeight={"bold"}
        >
          Search
        </Button>
        </Link>
        
      </Box>
    </>
  );
};
export default SearchBox;

function Pop() {
  const {
    adult,
    handleIncre,
    handledec,
    childrens,
    handlechildrenIncre,
    handlechildrenDec,
    room,
    handleroomIncre,
    handleroomDec,
  } = useContext(GuestContext);
  
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "true",
            "2xl": "flext",
          }}
          w="auto"
          justifyContent={"space-evenly"}
          alignItems="center"
          textAlign={"center"}
          borderRight={"4px solid #febb02"}
          gap="10px"
        >
          <Text mt="0 !important">{adult} adults</Text>
          <Text mt="0 !important">{childrens} children</Text>
          <Text mt="0 !important">{room} rooms</Text>
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader color={"white"}>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Adult</Text>
            <Button
              disabled={adult === 0}
              onClick={handledec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{adult}</Text>
            <Button
              onClick={handleIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Children</Text>
            <Button
              disabled={childrens === 0}
              onClick={handlechildrenDec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{childrens}</Text>
            <Button
              onClick={handlechildrenIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
          <PopoverBody display={"flex"} justifyContent={"space-around"}>
            <Text width={"40%"}>Room</Text>
            <Button
              disabled={room === 0}
              onClick={handleroomDec}
              border={"1px solid blue"}
              color={"black"}
            >
              -
            </Button>
            <Text marginTop={"5px"}>{room}</Text>
            <Button
              onClick={handleroomIncre}
              border={"1px solid blue"}
              color={"black"}
            >
              +
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
