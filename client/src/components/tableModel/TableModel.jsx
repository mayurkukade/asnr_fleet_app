/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "regenerator-runtime/runtime";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
// import { useVendorDetailsQuery } from "../../api/vendorSlice";
// import React, { useEffect, useState } from "react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Box,
  Flex,
  flexbox,
  border,
  Select,
  Button,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import SearchVendor from "../searchVendor/SearchVendor";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

const TableModel = ({
  data: V,
  columns,
  vendorFetchData,
  error,
  isLoading,
}) => {
  //   const { data: v, error, isLoading } = useVendorDetailsQuery();
  //   const [vendorFetchData, setVendorFetchData] = useState([]);
  //   useEffect(() => {
  //     const getData = setTimeout(() => {
  //       setVendorFetchData(v.results);
  //     }, 100);

  //     return () => clearTimeout(getData);
  //   }, [v]);

  //   console.log(vendorFetchData);

  const data = React.useMemo(() => vendorFetchData, [vendorFetchData]);

  //   const columns = React.useMemo(
  //     () => [
  //       {
  //         Header: "ID",
  //         accessor: "id",
  //       },
  //       {
  //         Header: "Vendor Name ",
  //         accessor: "name",
  //       },
  //       {
  //         Header: "Location",
  //         accessor: "location",
  //       },
  //       {
  //         Header: "Phone",
  //         accessor: "phone_no",
  //       },
  //       {
  //         Header: "Total Trips",
  //         accessor: "total_trips",
  //       },
  //       {
  //         Header: "Accept",
  //         accessor: "status.label",
  //       },
  //     ],
  //     []
  //   );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <>
      {error ? (
        <>Something Went Wrong Try After Sometime</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <TableContainer overflowX={"hidden"}>
            <SearchVendor
              preGlobalFilteredRows={preGlobalFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={state.SearchVendor}
            />
            <Table {...getTableProps()}>
              <Thead bgColor={"#95B6D8"} padding="20px 0px">
                {headerGroups.map((headerGroup, i) => (
                  <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        align="center"
                        padding="18px"
                        key={i}
                        {...column.getHeaderProps(column.getSortByToggleProps)}
                      >
                        {column.render("Header")}
                        <Text>
                          <HStack>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <Icon as={AiOutlineSortAscending} boxSize={6} />
                              ) : (
                                <Icon
                                  as={AiOutlineSortDescending}
                                  boxSize={6}
                                />
                              )
                            ) : (
                              ""
                            )}
                          </HStack>
                        </Text>
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Tr
                      key={i}
                      {...row.getRowProps()}
                      _hover={{ bg: "#EDF2F7" }}
                    >
                      {row.cells.map((cell) => (
                        <Td key={i} {...cell.getCellProps()}>
                          {" "}
                          {cell.render("Cell")}{" "}
                        </Td>
                      ))}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
            {/* <Box className="pagination" padding={"15px"}>
              <Flex >
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {"<<"}
                </button>{" "}
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </button>{" "}
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  {">"}
                </button>{" "}
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>{" "}
                <span>
                  | Go to page : {" "}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                    style={{ width: "100px" }}
                  />
                </span>{" "}
                <Select
                  placeholder="Select option"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  width={'200px'}
                >
                  {[5, 10, 15, 20, 25].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Box> */}

            <Box className="pagination" padding="15px" justifyItems="center">
              <Flex gap="10px">
                <Button
                  h={"35px"}
                  _hover={{ bg: "#1778f2" }}
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  First Page
                </Button>{" "}
                <Button
                  h={"35px"}
                  _hover={{ bg: "#1778f2" }}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous Page
                </Button>{" "}
                <Text alignItems="center" fontSize="18px" pt={"2px"}>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </Text>
                <Button
                  h={"35px"}
                  _hover={{ bg: "#1778f2" }}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {" "}
                  Next Page
                </Button>{" "}
                <Button
                  h={"35px"}
                  _hover={{ bg: "#1778f2" }}
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  Last Page
                </Button>{" "}
                <Text fontSize="18px" pt={"2px"}>
                  | Go to page :
                </Text>{" "}
                <Input
                  h={"35px"}
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  width="50px"
                />
                <Select
                  h={"35px"}
                  placeholder="Select option"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  width="110px"
                >
                  {[5, 10, 15, 20, 25].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Box>
          </TableContainer>
        </>
      ) : null}
    </>
  );
};

export default TableModel;
