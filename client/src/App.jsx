import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import {ROLES} from './config/role'
import {OnlyVendor} from './config/role'
import RequireAuth from "./features/RequireAuth";
import RequireVendor from './features/RequireVendor'
import VendorTabs from "./components/Vendor/VendorTabs";
import NotFound from "./pages/NotFound";
import FleetManegment from "./components/Fleet/FleetManegment";
import UserRoleManegment from "./components/UserRole/UserRoleManegment";
import Reports from "./components/Reports/Reports";


// import DriverModel from "./components/tableModel/DriverModel";
import AppLayout from "./components/appLayout/AppLayout";
import AdminTabs from "./components/adminTabs/AdminTabs";
import VendorModel from "./components/tableModel/VendorModel";
import VendorPageDetails from "./pages/VendorPageDetails";
import VendorNavBar from "./components/Navbar/VendorNavBar";
import AboutUs from "./pages/AboutUs";
import CantAccess from "./pages/CantAccess";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={<SignIn />} />

        <Route element={<AppLayout />}>
        <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
          <Route path="/admin" element={<AdminTabs />}>
            <Route path="/admin/fleet" element={<FleetManegment />} />
            <Route path="/admin/vendors" element={<VendorModel />} />
            <Route path="/admin/:id" element={<VendorPageDetails />} />
            <Route path="/admin/user" element={<UserRoleManegment />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>
          </Route>
        </Route>
        <Route element={<VendorNavBar />}>
          <Route path="/vendors" element={<VendorTabs />}>
            <Route path="/vendors/:id" element={<VendorPageDetails />} />
          </Route>
        </Route>
        <Route element={<RequireVendor allowedRoles={[...Object.values(OnlyVendor)]} />}>
          <Route path="/about" element={<AboutUs/>} />
        </Route>
        <Route path="/access" element={<CantAccess/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
