import { useVendorDetailsQuery } from "../../api/vendorSlice";
import { useState } from "react";
const FleetManegment = () => {
  const { data, isLoading, isError } = useVendorDetailsQuery();

 console.log(data)
  return (
    <>
      <h1>Fleet Manegment</h1>
    </>
  );
};

export default FleetManegment;
