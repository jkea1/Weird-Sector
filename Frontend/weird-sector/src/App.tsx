import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'

export default function App() {
  return (
    <div>
      <Navbar isLoggedIn={false} userName='정진경' />
      <Outlet />
      <Footer />
    </div>
  )
}
