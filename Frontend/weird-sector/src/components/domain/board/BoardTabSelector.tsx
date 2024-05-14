import { Link } from 'react-router-dom'
import Button from '../../common/Button'

export default function BoardTabSelector() {
  return (
    <nav className='flex gap-x-3 justify-center mt-14 mb-8'>
      <Link to='/board/free'>
        <Button color='orange' size='sm'>
          자유 게시판
        </Button>
      </Link>
      <Link to='/board/question'>
        <Button color='grey' size='sm'>
          질문 게시판
        </Button>
      </Link>
      <Link to='/board/etc'>
        <Button color='grey' size='sm'>
          기타 게시판
        </Button>
      </Link>
    </nav>
  )
}
