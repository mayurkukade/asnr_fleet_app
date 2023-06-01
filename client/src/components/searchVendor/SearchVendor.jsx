/* eslint-disable react/prop-types */
import {
  Input,
  Box,
  Icon,
  InputRightElement,
  InputGroup,
  useStyleConfig,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { BiSearchAlt } from "react-icons/bi";

const SearchVendor = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);
  const styles = useStyleConfig("Box", { variant: "hoverBorder" });
  return (
    <>
      <Box padding="15px" width="32%">
        <InputGroup>
          {/* <span>Search Record</span> */}
          <Input
          
            border={"2px solid #808080"}
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            placeholder={`${count} records...`}
          />
          <InputRightElement
            as={Box}
            sx={styles}
            transition="border 0.3s ease-in-out"
          >
            <Icon as={BiSearchAlt} boxSize={8} color="#808080" />
          </InputRightElement>
          {/* <InputRightElement borderLeft={'2px solid black'}>
          <Icon as={BiSearchAlt} boxSize={8} />
        </InputRightElement> */}
        </InputGroup>
      </Box>
    </>
  );
};

export default SearchVendor;
