import { Link } from 'react-router-dom'

export default function DashBoardSideBar() {
  return (
    <div className='w-[280px] border-r-[1px] border-[#E1E1E1] pt-[50px]'>
      <aside>
        <Link
          to='/board/free'
          className='text-2xl font-bold text-main-orange h-[76px] flex items-center pl-[15%]  hover:bg-gray-200'
        >
          Testsite
        </Link>
        <h1 className='text-xl h-[76px] flex items-center pl-[15%] cursor-not-allowed hover:bg-gray-200 hover:font-semibold'>
          테스트 데시보드
        </h1>
        <Link
          to='/dashBoard'
          className='text-xl text-main-orange h-[76px] flex items-center pl-[15%] hover:bg-gray-200 hover:font-semibold'
        >
          기본 데시보드
        </Link>
      </aside>
    </div>
  )
}
