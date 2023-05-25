import React,{ useEffect,useState } from 'react';
import TableModel from './TableModel';
import { useDriverDetailsQuery } from '../../api/driverSlice'
const DriverModel = () => {
    const {data:v,error,isLoading} = useDriverDetailsQuery()
    const [vendorFetchData, setVendorFetchData] = useState([]);

    const data = React.useMemo(() => vendorFetchData, [vendorFetchData]);
    const columns = React.useMemo(
      () => [
        {
          Header: "ID",
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
          Header: "Phone",
          accessor: "phone_no",
        },
        {
          Header: "Total Trips",
          accessor: "total_trips",
        },
        {
          Header: "Licence_no",
          accessor: "licence_no",
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
    console.log(vendorFetchData)
  return (
    <>
      <TableModel data ={data} columns={columns} vendorFetchData={vendorFetchData} error={error} isLoading={isLoading} />
    </>
  )
}

export default DriverModel

