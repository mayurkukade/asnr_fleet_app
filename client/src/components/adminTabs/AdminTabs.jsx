import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import "./admintabs.scss";
// isFitted variant='enclosed' align="center"
const AdminTabs = () => {
  return (
    <>
      <Tabs isFitted >
        <TabList>
          <Link to={"/admin/fleet"}>
            <Tab> Fleet Managment</Tab>
          </Link>
          <Link to={"/admin/vendors"}>
            {" "}
            <Tab>Vendor Managment</Tab>
          </Link>
          <Link to={"/admin/user"}>
            {" "}
            <Tab>User Role Managment</Tab>
          </Link>
          <Link to={"/admin/reports"}>
            {" "}
            <Tab>Reports</Tab>
          </Link>

          
        </TabList>

        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
    </>
  );
};

export default AdminTabs;
