import vendorData from "../json/vendor.json";
import { useTable, usePagination, useSortBy } from "react-table";

import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
 
    TableContainer,
  } from '@chakra-ui/react'

const VendorTable = () => {
  const data = React.useMemo(() => vendorData.vendors, []);

 
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "vendorID",
    },
    {
      Header: "Vendor Name",
      accessor: "vendorName",
    },
    {
      Header: "Location",
      accessor: "Location",
    },
    {
      Header: "Phone",
      accessor: "Phone",
    },
    {
      Header: "Total Trips",
      accessor: "TotalTrips",
    },
    {
      Header: "Accept",
      accessor: "Accept",
    },
  ],[]);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    
    state: { pageIndex, pageSize }, } =
    useTable({ columns, data,initialState:{pageIndex: 0} },useSortBy,usePagination);
  return (

    
      <TableContainer>
        <Table  {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup,i) => (
              <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th key={i} {...column.getHeaderProps(column.getSortByToggleProps)}>
                    {column.render("Header")}
                    <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}

                  </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row,i) => {
              prepareRow(row);
              return (
                <Tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td key={i} {...cell.getCellProps()}> {cell.render("Cell")} </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5,10,15,20,25].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    
      </TableContainer>
  );
};

export default VendorTable;
