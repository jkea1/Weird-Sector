// DashboardLayout.jsx
import { PropsWithChildren } from 'react'
import DashBoardSideBar from '../../components/domain/dashBoard/DashBoardSideBar'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-[1080px] min-w-[1920px]'>
      <DashBoardSideBar />
      {children}
    </div>
  )
}
