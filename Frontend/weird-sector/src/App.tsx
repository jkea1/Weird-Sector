import { useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import { getMeData } from './service/auth'

export default function App() {
  const { data: me } = useQuery({
    queryKey: ['me'],
    queryFn: () => getMeData(),
  })

  console.log('me', me)

  return (
    <div>
      <Navbar isLoggedIn={me ? true : false} nickname={me?.nickname} />
      <Outlet />
      <Footer />
    </div>
  )
}
