import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";
import Reviews from "./components/Vendor/Reviews";

import NotFound from "./pages/NotFound";
import FleetManegment from "./components/Fleet/FleetManegment";
import UserRoleManegment from "./components/UserRole/UserRoleManegment";
import Reports from "./components/Reports/Reports";
import VendorManegment from "./reactTable/VendorManegment";
import VendorDetails from "./components/Vendor/VendorDetails";
import SearchPage from "./pages/SearchPage";
import VendorTable from "./reactTable/VendorTable";
import VendorPage from "./pages/VendorPage";
import AddDriver from "./components/Vendor/AddDriver";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={<SignIn />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/:search" element={<SearchPage />} />
          <Route path="/admin/user" element={<UserRoleManegment />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/vendors" element={<VendorTable />} />
          <Route
            path="/admin/vendors/vendordetails"
            element={<VendorDetails />}
          />
          <Route path="/admin/fleet" element={<FleetManegment />} />
        </Route>
        <Route path="/vendors" element={<VendorPage />}>
          <Route path="/vendors/tripmanegment" element={<VendorManegment />} />
          <Route path="/vendors/reviews" element={<Reviews />} />
          <Route path="/vendors/adddriver" element={<AddDriver />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
