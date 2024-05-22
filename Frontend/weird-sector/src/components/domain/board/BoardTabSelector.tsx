import { Link } from 'react-router-dom'
import Button from '../../common/Button'

type props = {
  category: string | undefined
}

export default function BoardTabSelector({ category = 'free' }: props) {
  return (
    <nav className='flex gap-x-3 justify-center mt-14 mb-8'>
      <Link to='/board/free'>
        <Button color={category === 'free' ? 'orange' : 'grey'} size='sm'>
          자유 게시판
        </Button>
      </Link>
      <Link to='/board/question'>
        <Button color={category === 'question' ? 'orange' : 'grey'} size='sm'>
          질문 게시판
        </Button>
      </Link>
      <Link to='/board/etc'>
        <Button color={category === 'etc' ? 'orange' : 'grey'} size='sm'>
          기타 게시판
        </Button>
      </Link>
    </nav>
  )
}
