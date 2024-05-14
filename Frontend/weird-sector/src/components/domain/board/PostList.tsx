import PostListHeader from './PostListHeader'
import PostListItem from './PostListItem'

type postDataProps = {
  no: string
  title: string
  userName: string
  date: string
  viewCount: string
}

type props = {
  postData: postDataProps[]
  className: string
}

export default function PostList({ postData, className = '' }: props) {
  return (
    <div className={`${className}`}>
      <PostListHeader />
      {postData.map((post) => {
        return (
          <PostListItem
            no={post.no}
            title={post.title}
            userName={post.userName}
            date={post.date}
            viewCount={post.viewCount}
          />
        )
      })}
    </div>
  )
}
