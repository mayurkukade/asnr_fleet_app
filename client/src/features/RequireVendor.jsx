import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  console.log(allowedRoles);
  const location = useLocation();
  const username = localStorage.getItem("userInfo");
  
  const roles = JSON.parse(username).results;
console.log(roles.user[0].role)

//   const content = allowedRoles.includes(roles.user[0].role) ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/about" state={{ from: location }} replace />
//   )
//   return content;
const content = allowedRoles.includes(roles.user[0].role)?
<Outlet/> :(
    <Navigate to="/access" state={{ from: location }} replace />
)
return content
};
export default RequireAuth;