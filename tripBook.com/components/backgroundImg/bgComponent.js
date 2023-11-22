import { Box, Container, Heading, Text } from "@chakra-ui/react";
import styles from "../backgroundImg/bgComponent.module.css";
function BgComponent({ heading, subHeading }) {
  return (
    <>
      <Box
        // border="2px solid black"
        w="100%"
        color="white"
        height={{ md: "400px", sm: "300px" }}
      >
        <Box className={styles.bgImg} width="100%" height="100%">
          <Box
            // border="2px solid red"
            w="90%"
            margin="auto"
            p={4}
          >
            <Box className={styles.textOnImg}>
              <Text
                fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                fontWeight="bold"
                textShadow="4px 7px 7px #003580"
              >
                {heading}
              </Text>
              <br />

              <Text
                fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                textShadow="7px 8px 8px black"
              >
                {subHeading}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BgComponent;
