/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import "./admintabs.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// isFitted variant='enclosed' align="center"
const AdminTabs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/admin/fleet");
  }, []);
  return (
    <>
      <Tabs isFitted>
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
