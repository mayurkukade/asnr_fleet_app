import { Outlet } from "react-router-dom";
import data from "../../json/vendor.json";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
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

const VendorManegment = () => {
  const [sort,setSorted] = useState('true')
  const [sortLocation,setLocation] = useState([])
  
 
  const sortHandler = ()=>{
    setSorted(!sort)
    
  }
  
console.log(sortLocation)

  const vendorData = data.vendors.map((vendorData, i) => {
  
 

    return (
      <>
        <Tbody key={vendorData.vendorID}>
          <Tr>
            <Td>{vendorData.vendorID}</Td>
            <Td>
              <Link to="/admin/vendors/vendordetails">
                {vendorData.vendorName}
              </Link>{" "}
            </Td>
            <Td align="center" >
              <Link to="/admin/vendors/vendordetails">
              {vendorData.Location}
              </Link>
            </Td>
            <Td>
              <Link to="/admin/vendors/vendordetails">
                {vendorData.PhoneNo}
              </Link>
            </Td>
            <Td>
              <Link to="/admin/vendors/vendordetails">
                {vendorData.TotalTrips}
              </Link>
            </Td>
            <Td>
              <Link>{"✅ ❌"}</Link>
            </Td>
          </Tr>
        </Tbody>
      </>
    );
  });
  return (
    <>
      <Outlet />

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Vendor ID</Th>
              <Th>Vendor Name <button onClick={sortHandler}>{
              sort? <ArrowUpIcon/>:<ArrowDownIcon/>
            } </button></Th>
            <Th>Location <button onClick={sortHandler}>{
              sort? <ArrowUpIcon/>:<ArrowDownIcon/>
            } </button></Th>
              <Th>Phone No.</Th>
              <Th>Total Trips</Th>
              <Th>Accept/Reject</Th>
            </Tr>
          </Thead>
          {vendorData}
        </Table>
      </TableContainer>
    </>
  );
};

export default VendorManegment;
