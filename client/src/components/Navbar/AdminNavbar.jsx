
import { SearchIcon } from "@chakra-ui/icons";

import "./adminnavbar.scss";
import { Input } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import AdminTabs from "../adminTabs/AdminTabs";
import vendorJson from "../../json/vendor.json";
import Avtar from "./Avtar";

const VendorNavbar = () => {
  const [searchData, setSeachData] = useState("");
  

  const vendorData = vendorJson.vendors
    .filter((vendor) =>
      vendor.vendorName.toLowerCase().includes(searchData.toLowerCase())
    ||  vendor.Location.toLowerCase().includes(searchData.toLowerCase())
    ||  vendor.vendorID.toLowerCase().includes(searchData.toLowerCase())
    )
    .map((vendor) => {
      return (
        <>
        
         <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Vendor ID</Th>
              <Th>Vendor Name</Th>
              <Th>Location</Th>
              <Th>Phone No.</Th>
              <Th>Total Trips</Th>
              <Th>Accept/Reject</Th>
            </Tr>
          </Thead>
          <Tbody key={vendor.vendorID}>
        <Tr>
          <Td>{vendor.vendorID}</Td>
          <Td>
            <Link to="/admin/vendors/vendordetails">
              {vendor.vendorName}
            </Link>{" "}
          </Td>
          <Td align="center">
            <Link to="/admin/vendors/vendordetails">{vendor.Location}</Link>
          </Td>
          <Td>
            <Link to="/admin/vendors/vendordetails">{vendor.PhoneNo}</Link>
          </Td>
          <Td>
            <Link to="/admin/vendors/vendordetails">
              {vendor.TotalTrips}
            </Link>
          </Td>
          <Td>
            <Link>{"✅ ❌"}</Link>
          </Td>
        </Tr>
        </Tbody>
        </Table>
      </TableContainer>
        </>
      );
    });

  return (
    <>
    {
      searchData ? (
        <div className="navUpper">
        <div className="searchbarUpper">
          <button>
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setSeachData(e.target.value)}
              value={searchData}
              autoFocus='true'
            />
            <SearchIcon className="searchUpper" />
          </button>
        </div>
        {
          vendorData
        }
      </div>
      ):(
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
        </div>
        <Avtar />
      </div>
    
     <hr/>
      
      </>
      )
    }
     
    </>
  );
};

export default VendorNavbar;
