import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVendorIdQuery } from "../api/vendorSlice";
import TableModel from "../components/tableModel/TableModel";
const VendorPageDetails = () => {
  const [driverDetails, setDriverDetails] = useState([]);
  const { id } = useParams();
  const {
    data: drivers,
    isLoading,
    isFetching,
    isError,
    error,
  } = useVendorIdQuery(id);


  const data = React.useMemo(() => driverDetails, [driverDetails]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Sr. No",
        accessor: "",
        Cell: (row) => {
          return <div>{Number(row.row.id + 1) }</div>;
        },
        disableSortBy: true,
        disableFilters: true,
      },
      {
        Header: "Driver ID",
        accessor: "id",
      },
      {
        Header: "Driver Name ",
        accessor: "name",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Phone No.",
        accessor: "phone_no",
      },
      {
        Header: "Total Trips",
        accessor: "total_trips",
      },
      {
        Header: "Driver's Licence No",
        accessor: "status.label",
      },
    ],
    []
  );

  useEffect(() => {
    const getData = setTimeout(() => {
      setDriverDetails(drivers.results);
    }, 100);

    return () => clearTimeout(getData);
  }, [drivers]);
  console.log(driverDetails);
  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status} No Driver Found Please Add</div>;
  }
  return (
    <>
      <TableModel
        data={data}
        columns={columns}
        FetchData={driverDetails}
        error={error}
      />
    </>
  );
};

export default VendorPageDetails;
