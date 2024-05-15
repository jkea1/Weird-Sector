import { Link } from 'react-router-dom'

type props = {
  no: string
  title: string
  userName: string
  date: string
  viewCount: string
}

export default function PostListItem({
  no,
  title,
  userName,
  date,
  viewCount,
}: props) {
  return (
    <Link to='/post/free/1'>
      <div className='flex items-center w-[1144px] h-[51px] border-b-[1px] border-b-[#E1E1E1] hover:bg-[#F9F9F9]'>
        <div className='w-[62px] text-center'>{no}</div>
        <div className='w-[602px] text-center'>{title}</div>
        <div className='w-[160px] text-center'>{userName}</div>
        <div className='w-[160px] text-center'>{date}</div>
        <div className='w-[160px] text-center'>{viewCount}</div>
      </div>
    </Link>
  )
}
