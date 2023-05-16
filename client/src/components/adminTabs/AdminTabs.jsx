import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import "./admintabs.scss";
const AdminTabs = () => {
  return (
    <>
      <Tabs isFitted variant='enclosed' align="center">
        <TabList  >
          <Link to={"/admin/fleet"}>
            {" "}
            <Tab>Fleet Managment</Tab>
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

          <hr />
        </TabList>

        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
    </>
  );
};

export default AdminTabs;
