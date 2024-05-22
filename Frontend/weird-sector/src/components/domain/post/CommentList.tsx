import { Fragment } from 'react/jsx-runtime'
import { Comment as commentI } from '../../../types/model'
import Comment from './Comment'

type props = {
  comments: commentI[]
}

export default function CommentList({ comments }: props) {
  return (
    <>
      {comments?.map((comment, idx) => (
        <Fragment key={idx}>
          <Comment comment={comment} />
        </Fragment>
      ))}
    </>
  )
}
