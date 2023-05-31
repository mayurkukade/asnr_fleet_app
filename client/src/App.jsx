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

<<<<<<< HEAD

// import DriverModel from "./components/tableModel/DriverModel";
=======
// import VendorTable from "./reactTable/VendorTable";
import DriverModel from "./components/tableModel/DriverModel";
>>>>>>> 5d279fb2fbe61c6c77c03f0a3c052481608fe165
import AppLayout from "./components/appLayout/AppLayout";
import AdminTabs from "./components/adminTabs/AdminTabs";
import VendorModel from "./components/tableModel/VendorModel";
import VendorPageDetails from "./pages/VendorPageDetails";
import VendorNavBar from "./components/Navbar/VendorNavBar";
<<<<<<< HEAD
import AboutUs from "./pages/AboutUs";
import CantAccess from "./pages/CantAccess";
=======
import PaymentManagement from "./components/tableModel/PaymentManagement";
>>>>>>> 5d279fb2fbe61c6c77c03f0a3c052481608fe165

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

            <Route path="/admin/user" element={<UserRoleManegment />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>
<<<<<<< HEAD
          </Route>
=======
         
>>>>>>> 5d279fb2fbe61c6c77c03f0a3c052481608fe165
        </Route>
        <Route element={<VendorNavBar />}>
          <Route path="/vendors" element={<VendorTabs />}>
            <Route path="/vendors/:id" element={<VendorPageDetails />} />
<<<<<<< HEAD
          </Route>
        </Route>
        <Route element={<RequireVendor allowedRoles={[...Object.values(OnlyVendor)]} />}>
          <Route path="/about" element={<AboutUs/>} />
        </Route>
        <Route path="/access" element={<CantAccess/>} />
=======
            <Route
              path="/vendors/PaymentMangement"
              element={<PaymentManagement />}
            />
             {/* <Route path="/vendors" element={<VendorTabs />}>
            <Route
              path="/vendors/tripmanegment"
              element={<VendorManegment />}
            />
          </Route> */}
          </Route>
        </Route>    
        {/* <Route path="/admin/vendors/:id" element={<VendorPageDetails />} /> */}
        <Route path="/admin/DriverModel" element={<DriverModel />} />

>>>>>>> 5d279fb2fbe61c6c77c03f0a3c052481608fe165
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
