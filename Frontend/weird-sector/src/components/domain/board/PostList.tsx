import { Fragment } from 'react/jsx-runtime'
import { Post } from '../../../types/model'
import PostListHeader from './PostListHeader'
import PostListItem from './PostListItem'

type props = {
  posts: Post[]
  className: string
}

export default function PostList({ posts, className = '' }: props) {
  return (
    <div className={`${className}`}>
      <PostListHeader />

      <div>
        {posts?.map((post, idx) => {
          return (
            <Fragment key={post.id}>
              <PostListItem
                id={post.id}
                no={String(idx)}
                title={post.title}
                nickname={post.nickname}
                createdAt={post.createdAt}
                viewCount={post.viewCount}
              />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
