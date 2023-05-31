import { useLocation, Navigate, Outlet } from "react-router-dom"


const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const username = localStorage.getItem("userInfo");
    console.log(JSON.parse(username).results.user[0])
const roles = JSON.parse(username).results.user[0]
    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}
export default RequireAuth