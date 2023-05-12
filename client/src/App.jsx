
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Admin from './pages/Admin'
import VendorPage from './pages/VendorPage'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path="/sign" element={<SignIn />} />
      <Route path='/admin' element={<Admin/>} />
      
      <Route path='vendor/details' element={<VendorPage/>} />
    </Routes>

      
    </>
  )
}

export default App
