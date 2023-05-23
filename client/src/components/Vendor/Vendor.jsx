import { usevenderDetailsQuery } from "../../api/vendorSlice"
import AdminNavbar from '../Navbar/AdminNavbar'
import VendorTabs from "./VendorTabs"
const Vendor = () => {

    const [data] = usevenderDetailsQuery()
    console.log(data)
  return (
    <div>
      <AdminNavbar/>
      <VendorTabs/>
    </div>
  )
}

export default Vendor
