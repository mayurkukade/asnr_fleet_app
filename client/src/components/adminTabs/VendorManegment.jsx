import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "./admintable.scss";
import { Link } from "react-router-dom";

const VendorManegment = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric>Vendor ID</Th>
              <Th>Vendor's Name</Th>
              <Th>Location</Th>
              <Th>Phone No.</Th>
              <Th>Total Trips</Th>
              <Th>Accept/Reject</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td alignItems={"center"} isNumeric>
                1331
              </Td>
              <Td ><Link to={'/vendor/details'}>XYZ</Link> </Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
            <Tr>
              <Td alignItems={"center"} isNumeric>
                1331
              </Td>
              <Td>XYZ</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
            <Tr>
              <Td alignItems={"center"} isNumeric>
                1331
              </Td>
              <Td>XYZ</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>17</Td>
              <Td>✅/❌</Td>
            </Tr>
            <Tr>
              <Td alignItems={"center"} isNumeric>
                1331
              </Td>
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
