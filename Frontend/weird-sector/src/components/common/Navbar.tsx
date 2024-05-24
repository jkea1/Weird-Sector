import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../service/auth'
import Button from './Button'

type props = {
  isLoggedIn: boolean
  nickname: string | null
}

export default function Navbar({ isLoggedIn, nickname }: props) {
  const [hovered, setHovered] = useState(false)

  const navigate = useNavigate()

  const location = useLocation()
  const pathName = location.pathname.split('/').pop()

  if (pathName === 'login' || pathName === 'signUp') {
    isLoggedIn = false
  }

  const handleDashboardLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!isLoggedIn) {
      event.preventDefault()
      alert('로그인이 필요합니다.')
    }
  }

  const handleLogoutClick = () => {
    try {
      logout()
      isLoggedIn = false

      alert('로그아웃 되었습니다. 로그인 페이지로 이동합니다.')

      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <header className='bg-white h-[88px] w-full border-b border-[#E1E1E1] fixed z-50'>
      <div className='w-[1140px] h-full flex items-center justify-between m-auto px-4'>
        <nav className='flex items-center space-x-4'>
          <h1 className='text-2xl font-bold text-main-orange'>TestSite</h1>
          <div className='text-[#272727] text-lg'>
            <Link to='/board/free' className='px-3 py-2 hover:text-[#d6d6d6]'>
              게시판
            </Link>
            <Link
              to='/dashBoard'
              className='px-3 py-2 hover:text-[#d6d6d6]'
              onClick={handleDashboardLinkClick}
            >
              대시보드
            </Link>
          </div>
        </nav>
        <div>
          {isLoggedIn ? (
            <button
              className='text-gray-800 text-xl font-bold'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={handleLogoutClick}
            >
              {hovered ? 'Logout' : `${nickname} 님`}
            </button>
          ) : (
            <Link to='/login'>
              <Button color='white' size='base'>
                로그인
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
