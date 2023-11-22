import BgComponent from "../components/backgroundImg/bgComponent";
import { Slideshow } from "../components/explore/slideShow";
import SearchBox from "../components/searchBox/searchBox";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Nextrip } from "../components/explore/nextTrip";
import ConnectWithtravellers from "../components/explore/connectTravellers";
import Navbar from "../components/navbarSection/navbar";
function Stay() {
  // { slideImages, slide, travel, stay }
  // console.log(travel);
  const slideImages = [
    {
      url: "https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
      caption: "goa",
      property: "5,242 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
      caption: "Mumbai",
      property: "1,652 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
      caption: "delhi",
      property: "2,912 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684682.webp?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=",
      caption: "Lonavala",
      property: "751 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
      caption: "Banglore",
      property: "2,039 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
      caption: "Jaipur",
      property: "1,558 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684769.webp?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
      caption: "Pondicherry",
      property: "651 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684938.webp?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",
      caption: "Udaipur",
      property: "816 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=",
      caption: "North Goa",
      property: "3,903 properties",
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/square250/684919.webp?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",
      caption: "Ooty",
      property: "470 properties",
    },
  ];

  const slide = [
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",

      caption: "Hotels",
      property: "892,472 hotels",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
      caption: "Apartments",
      property: "926,012 apartments",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
      caption: "Resorts",
      property: "18,252 resorts",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
      caption: "Villas",
      property: "482,715 villas",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
      caption: "Cottages",
      property: "158,612 cottages",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
      caption: "Glamping",
      property: "14,004 glamping sites",
    },
    {
      url: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=",
      caption: "Serviced apartments",
      property: "35,899 serviced apartments",
    },
    {
      url: "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
      caption: "Holiday homes",
      property: "482,715 holiday homes",
    },
  ];

  const travel = [
    {
      caption: "Genuius",
      property: "mandloi, you're at Genius Level 1 in our loyalty programme",
      url: "https://cf.bstatic.com/xdata/images/xphoto/800x640/140040902.jpg?k=cc640a6bf0d56605d51d2efd34e35408aa55daab0b586be469fe7f9b6ed76518&o=",
    },
    {
      caption: "10% discounts",
      property: "Enjoy discounts at participating properties worldwide",
      url: "https://cf.bstatic.com/xdata/images/xphoto/800x640/140041070.jpg?k=93264b873c5d521f0c7dea5b7c20bab417016f80f68fb4e962020cbedc7e0ec8&o=",
    },
    {
      caption: "15% discounts",
      property: "Complete 5 stays to unlock Genius Level-2 limited time offer",
      url: "https://cf.bstatic.com/xdata/images/xphoto/800x640/140041021.jpg?k=50ca96e9a096248007c928276d12e5dad282fd03e2ea1823fda7a760db536763&o=",
    },
    {
      caption: "Free breakfasts",
      property: "Complete 5 stays to unlock Genius Level 2 limited time offer",
      url: "https://cf.bstatic.com/xdata/images/xphoto/800x640/140052024.jpg?k=b8f74619b3aec947be473a2cf34007c61c2d04cf75d0c0341f743fd221340b7e&o=",
    },
    {
      caption: "Free room upgrades",
      property: "Complete 5 stays to unlock Genius Level 2 limited time offer",
      url: "https://cf.bstatic.com/xdata/images/xphoto/800x640/140050120.jpg?k=beffc8d06a6e85cdde5efe2afee5629446aa3f5196827172d4fdc507b2fcae34&o=",
    },
  ];

  const stay = [
    {
      caption: "Genuius",
      property: "mandloi, you're at Genius Level 1 in our loyalty programme",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1",
    },
    {
      caption: "10% discounts",
      property: "Enjoy discounts at participating properties worldwide",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1",
    },
    {
      caption: "15% discounts",
      property: "Complete 5 stays to unlock Genius Level 2 limited time offer",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1",
    },
    {
      caption: "Free breakfasts",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1",
    },
    {
      caption: "Free room upgrades",
      property: "Complete 5 stays to unlock Genius Level 2",
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=262301cdcbef1d33942bb02607906eafdee8dde3106ac5732966a206baeebb04&o=&s=1",
    },
  ];

  return (


    <>
    <Navbar/>  
    
      <BgComponent
        heading="The joy of home anywhere in the world"
        subHeading="Easy booking, easy living"
      />
      <SearchBox />
      <Box
        display={"flex"}
        width={"88%"}
        height={"auto"}
        margin={"auto"}
        marginTop={"30px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Image
          //   width={"15%"}
          width={{
            base: "45%",
            sm: "40%",
            md: "25%",
            lg: "20%",
            xl: "20%",
            "2xl": "30%",
          }}
          height={"150px"}
          src={
            "https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
          }
        />
        <Box textAlign={"start"} marginLeft={"10px"} marginTop={"20px"}>
          <Text
            fontWeight={"bold"}
            fontSize={{
              base: "10px",
              sm: "14px",
              md: "19px",
              lg: "20px",
              xl: "21px",
              "2xl": "22px",
            }}
          >
            Save 15% or more{" "}
          </Text>
          <Text
            fontSize={{
              base: "10px",
              sm: "14px",
              md: "19px",
              lg: "20px",
              xl: "21px",
              "2xl": "22px",
            }}
          >
            This summer, make your dream trip a reality. Book and stay for less
            before 30 Sep 2022
          </Text>
          <Button
            width={{
              base: "45%",
              sm: "40%",
              md: "25%",
              lg: "20%",
              xl: "20%",
              "2xl": "30%",
            }}
            fontSize={{
              base: "9px",
              sm: "10px",
              md: "15px",
              lg: "15px",
              xl: "20px",
              "2xl": "20px",
            }}
            marginTop={"10px"}
            marginBottom={"10px"}
            colorScheme="blue"
          >
            Explore deals
          </Button>
        </Box>
      </Box>
      <br />
      {/* Explore India Slider */}

      <Slideshow
        image={slideImages}
        no={6}
        tag="Explore India"
        subTag="These popular destinations have a lot to offer"
      />

      {/* grid section  */}
      <br />
      <Box width={"88%"} margin={"auto"} marginTop={"20px"}>
        <Box
          height={"260px"}
          width={"100%"}
          display={"flex"}
          // justifyContent="space-evenly"
          marginBottom={"10px"}
          // border="4px solid red"
          gap="7px"
        >
          <Box
            display={"flex"}
            // width={"55%"}
            width={"50%"}
            height={"auto"}
            // border="2px solid black"
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["12px", "15px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                New Delhi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>

          <Box
            //  border="2px solid black"
            width={"50%"}
            height={"100%"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684499.webp?k=05c9fc4396edfc04f1e0f3d00ffbe182ebd969c9d83857a8e10a4e046fae21cd&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid pink"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"10px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>

        <Box width={"100%"} display={"flex"} gap="10px">
          <Box
            display={"flex"}
            width={"33%"}
            height={"260px"}
            background-position={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684655.webp?k=2afb45c7a46dedbc5b5b360599dbbb7a7165ac823b22dd66d7602ea4c49de1c4&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Agra
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/684939.webp?k=125d0a8cab106ebfe2b99eafa9ea548ab13b5846a4034bbe35387accfbd94240&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              // border="2px solid green"
              marginTop={"10px"}
            >
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Varanasi
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
          <Box
            width={"33%"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage="url(https://cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&amp;o=)"
          >
            <Box
              display={{
                base: "block",
                sm: "block",
                md: "flex",
                lg: "flex",
                xl: "flex",
                "2xl": "flex",
              }}
              marginTop={"10px"}
              // border="2px solid green"
            >
              {" "}
              <Text
                marginLeft={"12px"}
                color={"white"}
                fontSize={["18px", "20px", "25px", "28px"]}
                fontWeight={"bold"}
              >
                Mumbai
              </Text>
              <Image
                height={"25px"}
                width={"25px"}
                marginTop={"12px"}
                marginLeft={"8px"}
                verticalAlign={"center"}
                src="https://cf.bstatic.com/static/img/flags/24/in/56cd199c9f53cba5ccd7667c3a1a196f95e60a10.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      {/*Browse by property type section*/}

      <Slideshow image={slide} no={4} tag="Browse by property type" subTag="" />

      {/* travel Arround Asia */}
      <br />
      <Slideshow
        image={travel}
        no={4}
        tag="Travel around Asia"
        subTag="Explore more places we think you'll love"
      />
      <br />
      {/* Stay at our top unique properties */}

      <Slideshow
        image={stay}
        no={4}
        tag="Stay at our top unique properties"
        subTag="From castles and villas to boats and igloos, we've got it all"
      />
      <br />
      <Nextrip />
      <br />
      <br />

      <Box width={"88%"} margin="auto">
        <Text
          fontWeight={"bold"}
          fontSize={{
            base: "10px",
            sm: "14px",
            md: "19px",
            lg: "20px",
            xl: "21px",
            "2xl": "22px",
          }}
        >
          Connect with other travelers
        </Text>
        <br />
        <ConnectWithtravellers />
      </Box>
    </>
  );
}

export default Stay;

//we can use this if we want to use data from deployed server

// export const getStaticProps = async () => {
//   const res1 = await fetch(
//     "https://web-database-pravin.onrender.com/slideImages"
//   );

//   const dataSlideImage = await res1.json();

//   const res2 = await fetch("https://web-database-pravin.onrender.com/slide");

//   const dataSlide = await res2.json();

//   const res3 = await fetch("https://web-database-pravin.onrender.com/travel");

//   const dataTravel = await res3.json();

//   const res4 = await fetch("https://web-database-pravin.onrender.com/stay");

//   const dataStay = await res4.json();

//   return {
//     props: {
//       slideImages: dataSlideImage,
//       slide: dataSlide,
//       travel: dataTravel,
//       stay: dataStay,
//     },
//   };
// };
