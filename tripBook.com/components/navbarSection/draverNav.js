import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";

import styles from "./navbar.module.css";
import Link from "next/link";
import { QuestionIcon, Icon } from "@chakra-ui/icons";

import {
  IoAirplaneOutline,
  IoBedOutline,
  IoCarOutline,
  IoCarSportOutline,
  IoFlowerOutline,
} from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";

function DraverNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="#004cb8"
         
        border="1px solid white"
        onClick={onOpen}
        className={styles.smallnavbutton}
        // fontSize={{ md: "10px", sm: "16px" }}
      >
        Explore-more
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bg="#003580"
            color="white"
            textShadow="4px 4px 7px yellow"
          >
            Create your account & Explore
          </DrawerHeader>

          <DrawerBody>
            <Link href="stay" className={styles.navRow2s}>
              <IoBedOutline className={styles.iconsStyles1} />
              Stays
            </Link>

            <Link href="/flights" className={styles.navRow2s}>
              <IoAirplaneOutline className={styles.iconsStyles1} />
              Flights
            </Link>

            <Link href="#" className={styles.navRow2s}>
              <RiCommunityLine className={styles.iconsStyles1} />
              Flights + Hotel
            </Link>

            <Link href="/carrental" className={styles.navRow2s}>
              <IoCarSportOutline className={styles.iconsStyles1} />
              Car rentals
            </Link>

            <Link href="/regiter" className={styles.navRow2s}>
              <IoFlowerOutline className={styles.iconsStyles1} />
              Attractions
            </Link>

            <Link href="/login" className={styles.navRow2s}>
              <IoCarOutline className={styles.iconsStyles1} />
              Airport taxis
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Link href="/signup" className={styles.navRow2s}>
              <Button variant="outline" mr={3}>
                Register
              </Button>
            </Link>

            <Link href="/signin" className={styles.navRow2s}>
              <Button colorScheme="blue">Sign in</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DraverNav;
