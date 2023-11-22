import { Checkbox, Text } from "@chakra-ui/react";

const FilterBox = ({type, setFilter}) => {
  
  return (
    <Checkbox name={type} onInput={({target}) => setFilter(target.name)} m="5px">
      <Text fontSize="13px">
        {
          type === "Rating" ? ("> 9 Rating")
          : type === "Reviews" ? ("> 50 Reviews")
          : type === "Price" ? ("< 6000 Price")
          : null
        }
      </Text>
    </Checkbox>
  );
};

export default FilterBox;
