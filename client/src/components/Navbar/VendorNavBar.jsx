import { Outlet } from "react-router-dom";

import { Box, Text } from "@chakra-ui/react";
// import Avtar from "./Avtar";
import { Avatar } from "@chakra-ui/react";

const VendorNavBar = () => {
  // const data = localStorage.getItem("userInfo");
  // console.log(JSON.parse(data).results.user[0])
  // const {username,}
  return (
    <>
      <Box className="nav" >
        <Box className="searchbar">
          <Text fontSize="2xl" fontWeight="medium">
            ASNR Fleet App
          </Text>
        </Box>
        <Box className="card" px={"20px"} >
          <Box mr={'50px'} fontSize="l" fontWeight="medium">
            <Text>Vendor&apos;s Name : </Text>
            <Text>Vendor&apos;s Id :</Text>
          </Box>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
      </Box>
      <hr />

      <Outlet />
    </>
  );
};

export default VendorNavBar;
