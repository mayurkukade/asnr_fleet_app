
import VendorNavbar from "../components/Navbar/AdminNavbar";

import './admin.scss'
import AdminTabs from "../components/adminTabs/AdminTabs";


const Vendor = () => {
  return (
    <>
    <div className="adminpage">
    <VendorNavbar />
      <br />
      <AdminTabs/>
    </div>
    
   
     
    </>
  );
};

export default Vendor;
