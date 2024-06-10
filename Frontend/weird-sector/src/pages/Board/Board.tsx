import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import BoardTabSelector from '../../components/domain/board/BoardTabSelector'
import Pagination from '../../components/domain/board/Pagination'
import PostList from '../../components/domain/board/PostList'
import { getMeData } from '../../service/auth'
import { getPosts } from '../../service/posts'

export default function Board() {
  const { category } = useParams()

  const { data: posts } = useQuery({
    queryKey: ['posts', `${category}`],
    queryFn: () => getPosts(category),
  })

  const { data: me } = useQuery({
    queryKey: ['me'],
    queryFn: () => getMeData(),
  })

  const handlePostCreateButtonClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!me) {
      event.preventDefault()
      alert('로그인이 필요합니다.')
    }
  }

  let categoryName

  if (category === 'free') {
    categoryName = '자유'
  } else if (category === 'question') {
    categoryName = '질문'
  } else if (category === 'etc') {
    categoryName = '기타'
  }

  return (
    <div className='my-0 min-h-[1300px] flex flex-col justify-start items-center relative top-[260px]'>
      <div>
        <h3 className='text-main-orange text-[20px] font-bold text-center'>
          board
        </h3>
        <h1 className='text-[32px] font-bold my-3'>{`${categoryName}게시판`}</h1>
      </div>
      <div>
        <BoardTabSelector category={category} />
        <div>
          <div className='h-[600px]'>
            <PostList posts={posts} className='mt-10' />
            <Pagination />
            <Link
              to={`/post/${category}/create`}
              onClick={handlePostCreateButtonClick}
            >
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
    </div>
  )
}
