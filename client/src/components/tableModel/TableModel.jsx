/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// `/admin/vendors/${cell.row.values.id}`
import "regenerator-runtime/runtime";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
// import { useVendorDetailsQuery } from "../../api/vendorSlice";
// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
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
} from "react-icons/Ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/Md";
import {
  BiFirstPage,
  BiLastPage
} from "react-icons/bi"
const TableModel = ({
  data: V,
  columns,
  FetchData,
  error,
  isLoading,
  tableData,
}) => {
  const data = React.useMemo(() => FetchData, [FetchData]);
  var linkString
if(tableData == 'vendors'){
  console.log(tableData)
  linkString = '/vendors'
}else{
  linkString = '#'
}

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
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
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
          <TableContainer>
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
                          
                            <Flex>
                              {column.isSortedDesc ? (
                                <Icon as={AiOutlineSortAscending} boxSize={6} />
                              ) : (
                                <Icon
                                  as={AiOutlineSortDescending}
                                  boxSize={6}
                                />
                              )}
                            </Flex>
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
                          <Link to={`${linkString}/${cell.row.values.id}`}>
                            {cell.render("Cell")}
                          </Link>
                        </Td>
                      ))}
                    
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          

            <Box className="pagination" padding="15px" justifyItems="center">
              <Flex gap="10px">
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <BiFirstPage fontSize={"20px"} />
                  {/* First Page */}
                </Button>{" "}
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <MdOutlineKeyboardArrowLeft fontSize={"22px"} />
                  {/* Previous Page */}
                </Button>{" "}
                <Text alignItems="center" fontSize="18px" pt={"2px"}>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </Text>
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {" "}
                  {/* Next Page */}
                  <MdOutlineKeyboardArrowRight fontSize={"22px"} />
                </Button>{" "}
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {/* Last Page */}
                  <BiLastPage fontSize={"20px"} />
                </Button>{" "}
                <Text fontSize="18px" pt={"2px"}>
                  | Go to page :
                </Text>{" "}
                <Input
                  border={"1px solid black"}
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
                  //  _hover={{ bg: "#95B6D8" }}
                  border={"1px solid black"}
                  h={"35px"}
                  // placeholder="Select option"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  width="110px"
               
                >
                  {[5, 10, 15, 20, 25].map((pageSize) => (
                    <option key={pageSize} value={pageSize}  >
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
