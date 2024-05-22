import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import BoardTabSelector from '../../components/domain/board/BoardTabSelector'
import Pagination from '../../components/domain/board/Pagination'
import PostList from '../../components/domain/board/PostList'
import { getPosts } from '../../service/posts'

// const postsData = [
//   {
//     id: '1',
//     category: 'free',
//     title: '새로운 게시물 생성',
//     text: 'new message :)',
//     nickname: 'ea',
//     createdAt: 'Mon May 20 2024 14:49:41 GMT+0900 (Korean Standard Time)',
//     userId: '1716105098142',
//     viewCount: '20344',
//     file: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg',
//     hashtag: ['새로운', '게시물', '생성'],
//     comment: [
//       {
//         nickname: '진경',
//         commentText: '댓글을 생성하다.',
//         createdAt: 'Mon May 20 2024 14:49:41 GMT+0900 (Korean Standard Time)',
//       },
//       {
//         nickname: '에릭',
//         commentText: '에릭이 댓글을 생성하다.',
//         createdAt: 'Mon May 20 2024 14:49:41 GMT+0900 (Korean Standard Time)',
//       },
//     ],
//   },
//   {
//     id: '1',
//     category: 'free',
//     title: '새로운 게시물 생성',
//     text: 'new message :)',
//     nickname: 'ea',
//     createdAt: 'Mon May 20 2024 14:49:41 GMT+0900 (Korean Standard Time)',
//     userId: '1716105098142',
//     viewCount: '20344',
//     file: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg',
//     hashtag: ['새로운', '게시물', '생성'],
//     comment: [
//       {
//         nickname: '진경',
//         commentText: '댓글을 생성하다.',
//         createdAt: 'Mon May 20 2024 14:49:41 GMT+0900 (Korean Standard Time)',
//       },
//       {
//         nickname: '에릭',
//         commentText: '에릭이 댓글을 생성하다.',
//         createdAt: 'Mon May 20 2024 14:49:41 GMT+0900 (Korean Standard Time)',
//       },
//     ],
//   },
// ]

export default function Board() {
  const { category } = useParams()

  const { data: posts } = useQuery({
    queryKey: ['posts', `${category}`],
    queryFn: () => getPosts(category),
  })

  return (
    <div className='my-0 h-[1069px] flex flex-col justify-center items-center relative top-[88px]'>
      <div>
        <h3 className='text-main-orange text-[20px] font-bold text-center'>
          board
        </h3>
        <h1 className='text-[32px] font-bold my-3'>{`${category}게시판`}</h1>
      </div>
      <div>
        <BoardTabSelector category={category} />
        <div>
          <PostList posts={posts} className='mt-10' />
          <Pagination />
          <Link to='/post/free/create'>
            <Button
              color='black'
              size='base'
              className='relative bottom-7 left-[1020px]'
            >
              글쓰기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
