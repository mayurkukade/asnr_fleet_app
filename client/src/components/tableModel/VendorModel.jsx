import React, { useEffect, useState } from "react";
import TableModel from "./TableModel";
import { useVendorDetailsQuery } from "../../api/vendorSlice";

const VendorModel = () => {
  const { data: v, error, isLoading } = useVendorDetailsQuery();
  const [vendorFetchData, setVendorFetchData] = useState([]);

  const data = React.useMemo(() => vendorFetchData, [vendorFetchData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Vendor Name ",
        accessor: "name",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Phone",
        accessor: "phone_no",
      },
      {
        Header: "Total Trips",
        accessor: "total_trips",
      },
      {
        Header: "Accept",
        accessor: "status.label",
      },
    ],
    []
  );
  useEffect(() => {
    const getData = setTimeout(() => {
      setVendorFetchData(v.results);
    }, 100);

    return () => clearTimeout(getData);
  }, [v]);

  return (
    <>
      <TableModel
        data={data}
        columns={columns}
        FetchData={vendorFetchData}
        error={error}
        isLoading={isLoading}
        tableData='vendors'
        
      />
    </>
  );
};

export default VendorModel;
