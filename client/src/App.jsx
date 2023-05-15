import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Admin from "./pages/Admin";

import VendorManegment from "./components/adminTabs/VendorManegment";
import FleetManagment from "./components/adminTabs/FleetManagment";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<SignIn />} />
        <Route path="admin" index element={<Admin />}/> 
        <Route path="vendor" element={<VendorManegment />} />
        <Route path="fleetmanegment" element={<FleetManagment />} />
      </Routes>
    </>
  );
};

export default App;
