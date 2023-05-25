import { useState } from "react";
import { Input, SearchIcon } from "@chakra-ui/react";
import Avtar from "./Avtar";
const Navbar = () => {
  const [searchData, setSeachData] = useState("");
  return (
    <>
      <div className="nav">
        <div className="searchbar">
          <button>
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setSeachData(e.target.value)}
              value={searchData}
            />
            <SearchIcon className="search" />
          </button>
        </div>
        <Avtar />
      </div>

      <hr />
    </>
  );
};

export default Navbar;
