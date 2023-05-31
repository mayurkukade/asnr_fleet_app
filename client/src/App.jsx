import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

import VendorTabs from "./components/Vendor/VendorTabs";
import NotFound from "./pages/NotFound";
import FleetManegment from "./components/Fleet/FleetManegment";
import UserRoleManegment from "./components/UserRole/UserRoleManegment";
import Reports from "./components/Reports/Reports";

// import VendorTable from "./reactTable/VendorTable";
import DriverModel from "./components/tableModel/DriverModel";
import AppLayout from "./components/appLayout/AppLayout";
import AdminTabs from "./components/adminTabs/AdminTabs";
import VendorModel from "./components/tableModel/VendorModel";
import VendorPageDetails from "./pages/VendorPageDetails";
import VendorNavBar from "./components/Navbar/VendorNavBar";
import PaymentManagement from "./components/tableModel/PaymentManagement";

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

            <Route path="/admin/user" element={<UserRoleManegment />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Route>
<<<<<<< HEAD
          
=======
         
>>>>>>> origin/master
        </Route>
        <Route element={<VendorNavBar />}>
          <Route path="/vendors" element={<VendorTabs />}>
            <Route path="/vendors/:id" element={<VendorPageDetails />} />
            <Route
              path="/vendors/PaymentMangement"
              element={<PaymentManagement />}
            />
<<<<<<< HEAD
            {/* <Route path="/vendors" element={<VendorTabs />}>
=======
             {/* <Route path="/vendors" element={<VendorTabs />}>
>>>>>>> origin/master
            <Route
              path="/vendors/tripmanegment"
              element={<VendorManegment />}
            />
          </Route> */}
          </Route>
        </Route>    
        {/* <Route path="/admin/vendors/:id" element={<VendorPageDetails />} /> */}
        <Route path="/admin/DriverModel" element={<DriverModel />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
