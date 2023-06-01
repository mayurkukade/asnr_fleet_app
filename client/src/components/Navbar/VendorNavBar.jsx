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
      <Box className="nav" fontWeight="medium">
        <Box className="searchbar">
          <Text fontSize="2xl">ASNR Fleet App</Text>
        </Box>
        <Box className="card" px={"10px"}>
          <Box>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Box>
          <Box fontSize="l" w={"260px"}>
            <Text>
              Vendor&apos;s Name :{" "}
              <span style={{ fontWeight: "normal" }}> Akshay Barapatre</span>
            </Text>
            <Text>
              Vendor&apos;s Id :{" "}
              <span style={{ fontWeight: "normal" }}> FA154252</span>
            </Text>
          </Box>
        </Box>
      </Box>
      <hr />

      <Outlet />
    </>
  );
};

export default VendorNavBar;
