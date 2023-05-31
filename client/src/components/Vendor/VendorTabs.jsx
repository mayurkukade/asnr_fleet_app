/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, Tab, useDisclosure } from "@chakra-ui/react";

import { Outlet, Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";
import { FocusLock } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";
import FormAddDriver from "./FormAddDriver";
const VendorTabs = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/vendors/tripmanegment");
  // }, []);

  const { onOpen, onClose, isOpen } = useDisclosure();
  // const username = localStorage.getItem("userInfo");
  const firstFieldRef = React.useRef(null);
  return (
    <>
      <Tabs isFitted>
        <TabList
          padding="5px"
          spacing={4}
          style={{ display: "flex", gap: "100px", justifyContent: "center" }}
        >
          <>
            {/* <Link to={"/admin/fleet"} >
              <Tab w={"10%"} fontSize={"20px"}>
                Trip Management
              </Tab>
            </Link> */}
            <Tab w={"10%"} fontSize={"20px"}>
              <Link to={"/vendors/TripMangement"}>Trip Management</Link>
            </Tab>
            <Tab w={"10%"} fontSize={"20px"}>
              <Link to={"/vendors/PaymentMangement"}>Payment Management</Link>
            </Tab>
          </>

          <Box
            display={"flex"}
            alignItems={"center"}
            color="green"
            fontSize={"20px"}
          >
            Reviewer
            <Popover
              // isOpen={isOpen}
              // initialFocusRef={firstFieldRef}
              // onOpen={onOpen}
              // onClose={onClose}
              placement="bottom"
              // closeOnBlur={false}
            >
              <PopoverTrigger>
                <IconButton
                  color={"green"}
                  marginTop={"5px"}
                  marginLeft={"5px"}
                  size="sm"
                  icon={<EditIcon />}
                />
              </PopoverTrigger>
              <PopoverContent p={5}>
                <FocusLock returnFocus persistentFocus={false}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <FormAddDriver
                    firstFieldRef={firstFieldRef}
                    onCancel={onClose}
                  />
                </FocusLock>
              </PopoverContent>
            </Popover>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            marginRight={"50px"}
            color="green"
            fontSize={"20px"}
          >
            Add Driver Details
            <Popover
              isOpen={isOpen}
              initialFocusRef={firstFieldRef}
              onOpen={onOpen}
              onClose={onClose}
              placement="bottom"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <IconButton
                  color={"green"}
                  marginTop={"5px"}
                  marginLeft={"5px"}
                  size="sm"
                  icon={<EditIcon />}
                />
              </PopoverTrigger>
              <PopoverContent p={5}>
                <FocusLock returnFocus persistentFocus={false}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <FormAddDriver
                    firstFieldRef={firstFieldRef}
                    onCancel={onClose}
                  />
                </FocusLock>
              </PopoverContent>
            </Popover>
          </Box>
        </TabList>

        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
    </>
  );
};

export default VendorTabs;
