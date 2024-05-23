import { useQuery } from '@tanstack/react-query'
import { FaChevronLeft } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import CommentButton from '../../components/domain/post/CommentButton'
import CommentList from '../../components/domain/post/CommentList'
import HashTag from '../../components/domain/post/HashTag'
import { getPost } from '../../service/posts'
import { timeAgo } from '../../utils/timeAgo'

export default function Post() {
  const { id } = useParams()

  const { data: post } = useQuery({
    queryKey: ['post', `${id}`],
    queryFn: () => getPost(id),
  })

  let pastTime = timeAgo(post?.createdAt)

  return (
    <div className='my-0 py-[100px] w-[1144px] mx-auto flex flex-col justify-center relative top-[88px]'>
      <header className='mb-11 flex flex-col'>
        <div className='flex gap-x-4 mb-[20px]'>
          <FaChevronLeft className='relative top-[15px]' />
          <h1 className='text-[32px] font-bold'>{post?.title}</h1>
        </div>
        <div className='flex align-center gap-x-2 text-base h-[27px] p-1'>
          <div>{post?.nickname}</div>
          <div className='border-x-[1px] border-[#E1E1E1] px-2'>{`${pastTime}`}</div>
          <div>{`조회수 ${post?.viewCount}`}</div>
        </div>
      </header>
      <main>
        <section className='mb-4'>
          <p className='min-h-[420px] w-[1140px] text-xl break-all'>
            {post?.text}
          </p>
        </section>
        <section className='flex py-5 gap-x-4 '>
          <h2 className='text-xl font-normal text-main-orange'>첨부된 파일</h2>
          <div className='font-bold text-xl'>{post?.file}</div>
        </section>
        <section className='my-4'>
          <div className='flex space-x-3'>
            {post?.hashtag?.map((hashtag: string) => (
              <Fragment key={`${id}${hashtag}`}>
                <HashTag>{hashtag}</HashTag>
              </Fragment>
            ))}
          </div>
        </section>
        <section className='flex gap-x-4 py-[32px] mb-2'>
          <textarea className='w-[977px] h-[55px] p-3 border rounded mb-2 text-xl'></textarea>
          <CommentButton />
        </section>
        <section className=''>
          <CommentList comments={post?.comment} />
        </section>
      </main>
    </div>
  )
}
