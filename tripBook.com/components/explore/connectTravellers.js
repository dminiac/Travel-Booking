import React from "react";
import { Img, Text, SimpleGrid, Stack, Box } from "@chakra-ui/react";

function ConnectWithtravellers() {
  const data = [
    {
      caption: "Genuius",
      property: "mandloi, you're at Genius Level 1 in our programme",
      image:
        "https://cf.bstatic.com/static/img/communities/cover-photo/300x300/united-states-of-america/ba24465763ee132be84ce7c3e07d80096374e9d7.jpg",
      numbers: "343,321 travellers",
    },
    {
      caption: "10% discounts",
      property: "Enjoy discounts at participating properties",
      image:
        "https://cf.bstatic.com/static/img/communities/cover-photo/300x300/india/e4f4cf85c7a3c87ad369dc3da2a7774957dae913.jpg",
      numbers: "123,933 travellers",
    },
    {
      caption: "15% discounts",
      property: "Complete 5 stays to unlock Genius Level 2 program",
      image:
        "https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/f43b42664bbf44f174b44c64fd71440b4af56888.jpg",
      numbers: "111,433 travellers",
    },
    {
      caption: "Free breakfasts",
      property: "Complete 5 stays to unlock Genius Level 2",
      image:
        "https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/592ac5a7bbd5433c1aba6f1afdea794e572c9a69.png",
      numbers: "132,433 travellers",
    },
  ];

  return (
    <SimpleGrid minChildWidth="130px" spacing="20px">
      {data &&
        data.map((elem ,i) => (
          <Stack key={i}>
            <Box>
              <Img src={elem.image} />
              <Text  fontWeight={"bold"}
          // fontSize={["12px", "15px", "18px", "22px"]}
          marginBottom={"8px"}
          marginTop={"15px"} > {elem.caption} </Text>
              <Text> {elem.property} </Text>
              <Text> {elem.numbers} </Text>
            </Box>
          </Stack>
        ))}
    </SimpleGrid>
  );
}

export default ConnectWithtravellers;