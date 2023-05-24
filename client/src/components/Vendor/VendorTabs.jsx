import { Tabs, TabList, TabPanels, Tab, useDisclosure } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
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

  const firstFieldRef = React.useRef(null);
  return (
    <>
      <Tabs isFitted>
        <TabList d="flex">
          <Link to={"/vendors/tripmanegment"}>
            <Tab>Trip Manegment</Tab>
          </Link>

          <Box
            display={"flex"}
            alignItems={"center"}
            marginLeft={"25rem"}
            color="green"
          >
            Add Driver Details
          </Box>
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
        </TabList>

        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
    </>
  );
};

export default VendorTabs;
