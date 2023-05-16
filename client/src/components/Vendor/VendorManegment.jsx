import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const VendorManegment = () => {
  return (
    <>
      <Outlet />
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
          <Tbody>
            <Tr>
              <Td alignItems={"center"}>1331</Td>
              <Td>
                <Link to={"/admin/vendors/vendordetails"}>XYZ</Link>{" "}
              </Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
            <Tr>
              <Td alignItems={"center"}>1331</Td>
              <Td>XYZ</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
            <Tr>
              <Td alignItems={"center"}>1331</Td>
              <Td>XYZ</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
            <Tr>
              <Td alignItems={"center"}>1331</Td>
              <Td>XYZ</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VendorManegment;
