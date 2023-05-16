import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Link, Outlet } from "react-router-dom";
const VendorDetails = () => {
  return (
    <>

    <Link to={"/admin/vendors"}><Button margin={'0.5rem'} > <ArrowBackIcon/>Back </Button></Link>
      <TableContainer marginBottom={'5rem'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Driver ID</Th>
              <Th>Driver's Name</Th>
              <Th>Location</Th>
              <Th>Phone No.</Th>
              <Th>Total Trips</Th>
              <Th>Last Trip</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>123</Td>
              <Td>xyz</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>8</Td>
              <Td>1/4/23</Td>
            </Tr>
            <Tr>
              <Td>123</Td>
              <Td>xyz</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>8</Td>
              <Td>1/4/23</Td>
            </Tr>
            <Tr>
              <Td>123</Td>
              <Td>xyz</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>8</Td>
              <Td>1/4/23</Td>
            </Tr>
            <Tr>
              <Td>123</Td>
              <Td>xyz</Td>
              <Td>Pune</Td>
              <Td>988878787</Td>
              <Td>8</Td>
              <Td>1/4/23</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Outlet/>
    </>
  );
};

export default VendorDetails;
