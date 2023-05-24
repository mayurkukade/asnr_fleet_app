
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
import { useState,useEffect } from "react";
import { useVendorDetailsQuery } from "../../api/vendorSlice";
import vendorJson from "../../json/vendor.json";
import Avtar from "./Avtar";

const VendorNavbar = () => {
  const {data:v} = useVendorDetailsQuery()
  const [searchData, setSeachData] = useState("");
  const [vendorFetchData, setVendorFetchData] = useState([]);


useEffect(() => {
  const getData = setTimeout(() => {
    setVendorFetchData(v.results);
  }, 100);

  return () => clearTimeout(getData);
}, [v]);
console.log(vendorFetchData,'search')
  const vendorData = vendorFetchData
    .filter((vendor) =>
      vendor.name.toLowerCase().includes(searchData.toLowerCase())
    ||  vendor.location.toLowerCase().includes(searchData.toLowerCase())
    // ||  vendor.id.toLowerCase().includes(searchData.toLowerCase())
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
          <Tbody key={vendor.id}>
        <Tr>
          <Td>{vendor.id}</Td>
          <Td>
            <Link to="/admin/vendors/vendordetails">
              {vendor.name}
            </Link>{" "}
          </Td>
          <Td align="center">
            <Link to="/admin/vendors/vendordetails">{vendor.location}</Link>
          </Td>
          <Td>
            <Link to="/admin/vendors/vendordetails">{vendor.phone_no}</Link>
          </Td>
          <Td>
            <Link to="/admin/vendors/vendordetails">
              {vendor.total_trips}
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
