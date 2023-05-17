import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";

import FleetManegment from "./components/Fleet/FleetManegment";
import UserRoleManegment from "./components/UserRole/UserRoleManegment";
import Reports from "./components/Reports/Reports";
import VendorManegment from "./components/Vendor/VendorManegment";
import VendorDetails from "./components/Vendor/VendorDetails";
import SearchPage from "./pages/SearchPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={<SignIn />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/:search" element={<SearchPage/>} />
          <Route path="/admin/user" element={<UserRoleManegment />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/vendors" element={<VendorManegment />} />
          <Route
            path="/admin/vendors/vendordetails"
            element={<VendorDetails />}
          />

          <Route path="/admin/fleet" element={<FleetManegment />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
