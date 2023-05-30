
import { Outlet } from "react-router-dom";

import { Box, Text } from "@chakra-ui/react";


const VendorNavBar = () => {
  return (
    <>
      <Box className="nav">
            <Box className="searchbar">
              <Text fontSize='2xl' fontWeight="medium">ASNR Fleet App</Text >
            </Box>
          
          </Box>

          <hr />
    
          <Outlet/>
      
    </>
  )
}

export default VendorNavBar
