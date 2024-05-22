import { Comment as commentI } from '../../../types/model'

type props = {
  comment: commentI
}

export default function Comment({ comment }: props) {
  return (
    <div className='flex flex-col gap-y-4 justify-center h-[240px] border-t-[1px] border-t-[#E1E1E1]'>
      <div className='text-xl font-bold'>{comment.nickname}</div>
      <p className='text-xl'>{comment.commentText}</p>
      <div className='text-[#B8B7B7]'>{comment.createdAt}</div>
    </div>
  )
}
