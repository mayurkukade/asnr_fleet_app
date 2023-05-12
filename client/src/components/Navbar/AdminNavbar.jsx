import { Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./adminnavbar.scss";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
const VendorNavbar = () => {
  return (
    <>
      <div className="nav">
        <div className="searchbar">
          <button>
            <Input placeholder="Search" />
            <SearchIcon className="search" />
          </button>
        </div>

        <div className="card">
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              User Name
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
