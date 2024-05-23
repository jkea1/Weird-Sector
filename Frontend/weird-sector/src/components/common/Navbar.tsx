import { Link } from 'react-router-dom'
import Button from './Button'

type props = {
  isLoggedIn: boolean
  nickname: string
}

export default function Navbar({ isLoggedIn, nickname }: props) {
  const handleDashboardLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!isLoggedIn) {
      event.preventDefault()
      alert('로그인이 필요합니다.')
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
            <span className='text-gray-800 text-xl font-bold'>
              {nickname} 님
            </span>
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
