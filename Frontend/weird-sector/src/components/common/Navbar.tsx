import { Link } from 'react-router-dom'
import Button from './Button'

type props = {
  isLoggedIn: boolean
  userName: string
}

export default function Navbar({
  isLoggedIn = true,
  userName = '정진경',
}: props) {
  return (
    <header className='bg-white h-[88px] w-full border-b border-[#E1E1E1] fixed z-50'>
      <div className='w-[1140px] h-full flex items-center justify-between m-auto px-4'>
        <nav className='flex items-center space-x-4'>
          <h1 className='text-2xl font-bold text-main-orange'>TestSite</h1>
          <div className='text-[#272727] text-lg'>
            <Link to='/board/free' className='px-3 py-2 hover:text-[#d6d6d6]'>
              게시판
            </Link>
            <Link to='/dashBoard' className='px-3 py-2 hover:text-[#d6d6d6]'>
              대시보드
            </Link>
          </div>
        </nav>
        <div>
          {isLoggedIn ? (
            <span className='text-gray-800 text-xl font-bold'>
              {userName} 님
            </span>
          ) : (
            <Link to='/login'>
              <Button color='white' size='md'>
                로그인
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
