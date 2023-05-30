import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

import VendorTabs from "./components/Vendor/VendorTabs";
import NotFound from "./pages/NotFound";
import FleetManegment from "./components/Fleet/FleetManegment";
import UserRoleManegment from "./components/UserRole/UserRoleManegment";
import Reports from "./components/Reports/Reports";
import VendorManegment from "./reactTable/VendorManegment";

// import VendorTable from "./reactTable/VendorTable";
import DriverModel from "./components/tableModel/DriverModel";
import AppLayout from "./components/appLayout/AppLayout";
import AdminTabs from "./components/adminTabs/AdminTabs";
import VendorModel from "./components/tableModel/VendorModel";
import VendorPageDetails from "./pages/VendorPageDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={<SignIn />} />

        <Route element={<AppLayout />}>
          <Route path="/admin" element={<AdminTabs />}>
            <Route path="/admin/fleet" element={<FleetManegment />} />
            <Route path="/admin/vendors" element={<VendorModel />} />
            <Route path="/admin/vendors/:id" element={<VendorPageDetails />} />
            <Route path="/admin/user" element={<UserRoleManegment />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>
          <Route path="/vendors" element={<VendorTabs />}>
            <Route
              path="/vendors/tripmanegment"
              element={<VendorManegment />}
            />
          </Route>
          <Route path="/admin/Vendormodel" element={<VendorModel />} />
          <Route path="/admin/DriverModel" element={<DriverModel />} />
        </Route>
        <Route path="vendors/:id" element={<VendorPageDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
