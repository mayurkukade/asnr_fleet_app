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
} from "@chakra-ui/react";
import SearchVendor from "../searchVendor/SearchVendor";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/Ai";

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
        <>Oh no, there was an error</>
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
              <Thead bgColor={"#EDF2F7"} padding='20px 0px' >
                {headerGroups.map((headerGroup, i) => (
                  <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        padding='18px'
                        key={i}
                        {...column.getHeaderProps(column.getSortByToggleProps)}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <Icon as={AiOutlineSortAscending} boxSize={6} />
                            ) : (
                              <Icon as={AiOutlineSortDescending} boxSize={6} />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Tr key={i} {...row.getRowProps()}>
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
            <Box className="pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>{" "}
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </button>{" "}
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
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
              <span>
                | Go to page:{" "}
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
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 15, 20, 25].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </Box>
          </TableContainer>
        </>
      ) : null}
    </>
  );
};

export default TableModel;
