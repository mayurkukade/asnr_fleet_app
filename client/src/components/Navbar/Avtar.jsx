import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react"
import './adminnavbar.scss'
const Avtar = () => {
    const username = localStorage.getItem("persistname");
  return (
    <>
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
    </>
  )
}

export default Avtar
