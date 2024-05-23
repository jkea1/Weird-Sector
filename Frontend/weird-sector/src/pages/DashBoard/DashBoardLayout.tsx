import { ReactNode } from 'react'
import DashBoardSideBar from '../../components/domain/dashBoard/DashBoardSideBar'

type props = {
  children: ReactNode
}

export default function DashBoardLayout({ children }: props) {
  return (
    <div className='flex min-h-[1365px] min-w-[1920px]'>
      <DashBoardSideBar />
      {children}
    </div>
  )
}
