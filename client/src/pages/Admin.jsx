import AdminNavbar from "../components/Navbar/AdminNavbar";

import "./admin.scss";
import AdminTabs from "../components/adminTabs/AdminTabs";

const Vendor = () => {
  return (
    <>
      <div className="adminpage">
        <AdminNavbar />
       
        <AdminTabs />
      </div>
    </>
  );
};

export default Vendor;
