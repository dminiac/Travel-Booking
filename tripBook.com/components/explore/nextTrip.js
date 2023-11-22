import { Box, Text } from "@chakra-ui/react";
export const Nextrip = () => {
  return (
    <>
      <Box
        width={"88%"}
        margin={"auto"}
        marginTop={"30px"}
        // border="2px solid pink"
      >
        <Text
          textAlign={"start"}
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          margin={"10px 0 15px 0"}
        >
          Get inspiration for your next trip
        </Text>

        <Box
          //  height={"260px"}
          width={"100%"}
          // display={{base :"grid",  sm:"grid" , md:"flex" , lg:"flex" , xl : "flex" , '2xl' : "flex"}}
          display={"flex"}
          gridAutoColumns=""
          height="auto"
          marginBottom={"10px"}
          gap="10px"
          // border="2px solid green"
        >
          <Box
            position={"relative"}
            display={"flex"}
            width={"50%"}
            // width={{base :"0%",  sm:"50%" , md:"50%" , lg:"50%" , xl : "50%" , '2xl' : "50%"}}
            height={"auto"}
            backgroundPosition={"cover"}
            backgroundRepeat={"no-repeat"}
            backgroundImage='url("https://cf.bstatic.com/xdata/images/xphoto/540x405/165922442.webp?k=7620df87dcc9ef0cd2fe66423dbf11fbdc2cd17e090856d8046aa3ec60dd3764&amp;o=");'
          >
            <Box
              position={"absolute"}
              bottom="2"
              right="0"
              left="5"
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "hide",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  "2xl": "block",
                }}
              >
                Europe's best but less obvious group holiday spots
              </Text>
              <Text
                color={"white"}
                fontWeight={"500"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "hide",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  "2xl": "block",
                }}
              >
                The best place in europe for an idyllic late-summer escape with
                friends.
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            width={"50%"}
            // width={{base :"100%",  sm:"50%" , md:"50%" , lg:"50%" , xl : "50%" , '2xl' : "50%"}}
            height={"260px"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage='url("https://cf.bstatic.com/xdata/images/xphoto/720x405/165609232.webp?k=4367ee64da98f68300d41a1c85ce3b2fe518b4c046cb2021d7bc34a499ace5dd&amp;o=");'
          >
            <Box
              position={"absolute"}
              bottom="2"
              right="0"
              left="5"
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
              >
                The USA’s 9 most beautiful beaches
              </Text>
              <Text
                color={"white"}
                fontWeight={"500"}
                textShadow="7px 8px 8px black"
              >
                The finest stretches of sand to be found in North America.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
        gap="10px"
          // width={"100%"}
          // display={"flex"}
          // border={{ base:"8px solid yellow", sm:'5px solid green', md: '3px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
          display={{
            base: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            "2xl": "100%",
          }}
        >
          <Box
            position={"relative"}
            display={"flex"}
            // width={"33%"}
            width={{
              base: "0%",
              sm: "33%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "33%",
            }}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage='url("https://cf.bstatic.com/xdata/images/xphoto/540x405/167587831.webp?k=31e6256fc044ff9b127babfafcde346ded92aa66545f925fa84b749a8226dc30&amp;o=")'
          >
            <Box
              position={"absolute"}
              bottom="2"
              right="0"
              left="5"
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  "2xl": "block",
                }}
              >
                48 hours in Paris, France
              </Text>
              <Text
                color={"white"}
                fontWeight={"500"}
                fontSize={"13px"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                The perfect 2-day itinerary for visiting The City of Light.
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            // width={"33%"}
            // width={{base :"100%", lg:"33%"}}
            width={{
              base: "100%",
              sm: "33%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "33%",
            }}
            display={"flex"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage='url("https://cf.bstatic.com/xdata/images/xphoto/540x405/167616822.webp?k=31bae8840b12db441ce925b86f3f5149fda3f9851de6dfbd48cfff89a6680b74&amp;o=")'
          >
            <Box
              position={"absolute"}
              bottom="2"
              right="0"
              left="5"
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
              >
                The 9 most beautiful cities for autumn travel
              </Text>
              <Text
                color={"white"}
                fontWeight={"500"}
                fontSize={"13px"}
                textShadow="7px 8px 8px black"
              >
                From soaking in Seoul’s hot springs to tucking into sticky
                cinnamon rolls in Montreal.
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            // width={"33%"}
            width={{
              base: "0%",
              sm: "33%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "33%",
            }}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage='url("https://cf.bstatic.com/xdata/images/xphoto/540x405/167580228.webp?k=081bfa5713fa309507294247377ac4d4b9c23d45bbb3161711c97ba2847b7bfc&amp;o=");'
          >
            <Box position={"absolute"} bottom="2" right="0" left="5">
              <Text
                textAlign={"start"}
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                Top 5 US cities to celebrate Labor Day Weekend
              </Text>
              <Text
                textAlign={"start"}
                color={"white"}
                fontWeight={"500"}
                fontSize={"13px"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                Leave summer with no regrets when you head to these cities for
                Labor Day Weekend.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
