import AdminNavbar from '../Navbar/AdminNavbar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
      
    </>
  )
}

export default AppLayout
