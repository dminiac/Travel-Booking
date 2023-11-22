import {
  Box,
  Button,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { BiChevronDown } from "react-icons/bi";
import FilterBox from "../../components/Filters";
import SearchCard from "../../components/SearchCard";
import SearchForm from "../../components/SearchForm";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import Navbar from "../../components/navbarSection/navbar";
import { connect } from "../../db.connect";
import { PropertyModel } from "../../models/property.model";

const Property = ({ data }) => {
  const router = useRouter();
  const { city } = router.query;
  const [sort, setSort] = useState("TopPicks");
  const [filter, setFilter] = useState("");
  const filters = ["Rating", "Reviews", "Price"];

  useEffect(() => {
    router.push({
      pathname: "/property",
      query: { city: city, filterBy: filter }
    });
  },[filter])

  useEffect(() => {
    router.push({
      pathname: "/property",
      query: { city: city, sortBy: sort},
    });
  }, [sort]);

  return (
    <>
      <Navbar />
      <Flex
        w="82%"
        m="30px auto"
        justifyContent="space-between"
        gap="10px"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Flex flexDirection="column" minW="277px" gap="5px">
          <SearchForm />

          <Box display={["none", "none", "block", "block"]} fontSize="14px">
            <Box p="8px" border="1px solid #E7E7E7">
              <Text fontWeight="bold">Filter by:</Text>
            </Box>
            <Flex p="8px" border="1px solid #E7E7E7" flexDirection="column">
              <Text fontWeight="bold">Popular filters</Text>
              {filters.map((el, i) => (
                <FilterBox setFilter={setFilter} type={el} key={i} />
              ))}
            </Flex>
          </Box>
        </Flex>
        <Flex
          w={["100%", "100%", "72%", "72%"]}
          flexDirection="column"
          gap="15px"
        >
          <Text fontSize="22px" fontWeight="bold">
            {city}: {data.length} properties found
          </Text>
          <Menu>
            <MenuButton
              bg="white"
              border="1px solid #1771C4"
              color="#1771C4"
              borderRadius="50px"
              w="220px"
              as={Button}
              rightIcon={<BiChevronDown />}
            >
              Sort By: {sort}
            </MenuButton>
            <MenuList>
              <MenuOptionGroup
                onChange={(value) => {
                  setSort(value);
                }}
                defaultValue="Top picks"
                type="radio"
              >
                <MenuItemOption value="TopPicks">Our top picks</MenuItemOption>

                <MenuItemOption value="HighestRating">
                  Rating (Highest)
                </MenuItemOption>
                <MenuItemOption value="LowestRating">
                  Rating (Lowest)
                </MenuItemOption>
                <MenuItemOption value="TopReviewed">
                  Top reviewed
                </MenuItemOption>
                <MenuItemOption value="LowPrice">Low Price</MenuItemOption>
                <MenuItemOption value="HighPrice">High Price</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          {data.map((el) => (
            <SearchCard
              title={el.title}
              TravelText={el.TravelText}
              TravelText1={el.TravelText1}
              TravelText2_o={el.TravelText2_o}
              TravelText_2={el.TravelText_2}
              key={el._id}
              TravelText2={el.TravelText2}
              price={el.price}
              reviews={el.reviews}
              rating={el.rating}
              ratingStatus={el.ratingStatus}
              imagescr={el.imagescr}
              id={el._id}
              city={el.city}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { city, sortBy, filterBy } = context.query;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  let properties = await PropertyModel.find({ city });

  if (sortBy) {
    switch (sortBy) {
      case "TopReviewed":
      case "TopPicks":
         {
        properties = await PropertyModel.find({ city }).sort({
          reviews: -1,
        });

        break;
      }

      case "HighestRating": {
        properties = await PropertyModel.find({ city }).sort({
          rating: -1,
        });

        break;
      }

      case "LowestRating": {
        properties = await PropertyModel.find({ city }).sort({ rating: 1 });

        break;
      }

      case "LowPrice": {
        properties = await PropertyModel.find({ city }).sort({
          price: 1,
        });

        break;
      }

      case "HighPrice": {
        properties = await PropertyModel.find({ city }).sort({
          price: -1,
        });

        break;
      }

      default:
        break;
    }
  }

  if(filterBy){
    switch(filterBy){
    case "Price" : {
      properties = await PropertyModel.find({$and:[{city}, {price: { $lte: 6000}}]}).sort();

      break;
    }

    case "Reviews" : {
      properties = await PropertyModel.find({$and:[{city}, {reviews: { $gte: 50}}]});

      break;
    }

    case "Rating" : {
      properties = await PropertyModel.find({$and:[{city}, {rating: { $gte: 9}}]});

      break;
    }

    default: 
    break;
  }
  }


  return {
    props: {
      data: JSON.parse(JSON.stringify(properties)),
    },
  };
};

export default Property;
