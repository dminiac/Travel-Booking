import { Slideshow } from "../components/explore/slideShow";
import Navbar from "../components/navbarSection/navbar";
import SearchBox from "../components/searchBox/searchBox";

function carRental() {
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
      property: "Complete 5 stays to unlock Genius Level 2",
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
    <div>
      <Navbar />
      <SearchBox />
      <Slideshow
        image={stay}
        no={4}
        tag="Popular flights near you"
        subTag="Find deals on domestic and international flights"
      />
      <br />
      <Slideshow
        image={stay}
        no={4}
        tag="Trending cities"
        subTag="Book flights to a destination popular with travelers from India"
      />
    </div>
  );
}

export default carRental;
