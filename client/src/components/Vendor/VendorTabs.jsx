import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
const VendorTabs = () => {
  return (
    <>
      <Tabs isFitted>
        <TabList>
          <Link to={"/vendors/tripmanegment"}>
            <Tab>Trip Manegment</Tab>
          </Link>
          <Link to ={"/vendors/reviews"}>
            <Tab>Reviews</Tab>
          </Link>
          <Link to ={"/vendors/adddriver"}>
            <Tab >Add Driver</Tab>
          </Link>
        </TabList>

        <TabPanels>
            <Outlet/>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default VendorTabs;
