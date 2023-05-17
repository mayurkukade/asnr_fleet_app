import { Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./adminnavbar.scss";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";

import vendorJson from "../../json/vendor.json";

const VendorNavbar = () => {
  const [searchData, setSeachData] = useState("");
  const username = localStorage.getItem("persistname");

  const vendorData = vendorJson.vendors
    .filter((vendor) =>
      vendor.vendorName.toLowerCase().includes(searchData.toLowerCase())
    )
    .map((vendor) => {
      return (
        <>
        {
          searchData? <ul className="listGroup" key={vendor.vendorID}>
          <li className="listItem">{vendor.vendorName}</li>
          <li className="listItem">{vendor.Location}</li>
        </ul> : ' '
        }
          
        </>
      );
    });



  return (
    <>
      <div className="nav">
        <div className="searchbar">
          <button>
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setSeachData(e.target.value)}
              value={searchData}
            />
            <SearchIcon className="search" />
          </button>
          {vendorData}
        </div>

        <div className="card">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {username}
            </MenuButton>
            <MenuList>
              <MenuItem>History</MenuItem>
              <MenuItem>FAQ Managment</MenuItem>

              <MenuItem>Settings</MenuItem>
              <MenuItem>Payment</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <hr />
    </>
  );
};

export default VendorNavbar;
