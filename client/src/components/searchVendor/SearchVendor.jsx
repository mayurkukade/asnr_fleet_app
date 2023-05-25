/* eslint-disable react/prop-types */
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const SearchVendor = ({
    
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}
   
) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 300);
  return (
    <>
      <Input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </>
  )
}

export default SearchVendor





