import { Link } from 'react-router-dom'

type props = {
  no: string
  title: string
  id: string
  nickname: string
  createdAt: string
  viewCount: string
}

export default function PostListItem({
  no,
  title,
  id,
  nickname,
  createdAt,
  viewCount,
}: props) {
  return (
    <Link to={`/post/${id}`}>
      <div className='flex items-center w-[1144px] h-[51px] border-b-[1px] border-b-[#E1E1E1] hover:bg-[#F9F9F9]'>
        <div className='w-[62px] text-center'>{no}</div>
        <div className='w-[602px] text-center'>{title}</div>
        <div className='w-[160px] text-center'>{nickname}</div>
        <div className='w-[160px] text-center'>{createdAt}</div>
        <div className='w-[160px] text-center'>{viewCount}</div>
      </div>
    </Link>
  )
}
