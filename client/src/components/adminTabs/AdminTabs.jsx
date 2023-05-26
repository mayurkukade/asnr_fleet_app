/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, Tab, Flex } from "@chakra-ui/react";
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
      <Tabs isFitted >
        
          <TabList padding="5px" spacing={4} style={{display:'flex',gap:'150px',justifyContent:'center'}}>
            <Link to={"/admin/fleet"} spacing={4}>
              <Tab fontSize={'20px'}> Fleet Management</Tab>
            </Link> 
            <Link to={"/admin/vendors"}>
              {" "}
              <Tab fontSize={'20px'}>Vendor Management</Tab>
            </Link>
            <Link to={"/admin/user"}>
              {" "}
              <Tab fontSize={'20px'}>User Role Management</Tab>
            </Link>
            <Link to={"/admin/reports"}>
              {" "}
              <Tab fontSize={'20px'}>Reports</Tab>
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
