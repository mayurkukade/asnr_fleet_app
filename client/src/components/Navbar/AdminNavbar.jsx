import { Avatar } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./adminnavbar.scss";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";

import vendorData from '../../json/vendor.json'
import { useEffect } from "react";
const VendorNavbar = () => {

const username = localStorage.getItem('persistname')

const [search,setSearch] = useState([])
const [searchResult,setSearchResult] = useState([])
useEffect(()=>{
  vendorData.vendor.map((i)=>{
  if(i.Location == search){
   return setSearchResult(i.Location)
  }else{
    setSearchResult(' ')
  }
   })
},[search])
console.log(searchResult)

  return (
    <>
      <div className="nav">
        <div className="searchbar">
          <button>
            <Input placeholder="Search" onChange={(e)=>setSearch(e.target.value)} value={search}  />
            <SearchIcon className="search" />
          </button>
          <li>
            <p>{searchResult}</p>
          </li>
      
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
