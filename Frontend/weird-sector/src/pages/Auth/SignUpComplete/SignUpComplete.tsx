import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'

export default function SignUpComplete() {
  return (
    <div className='my-0 h-[1068px] flex flex-col justify-center items-center relative top-[88px]'>
      <div className='flex flex-col items-center gap-y-3'>
        <div className='bg-main-orange rounded-full w-10 h-10'>
          <AiOutlineCheck className='text-main-white w-10 h-10 p-2' />
        </div>
        <h1 className='text-2xl text-[#040404] font-bold'>
          회원가입이 완료되었습니다.
        </h1>
        <h3 className='text-xl text-[#808080] font-normal'>축하드려요!</h3>
      </div>
      <Link to='/login'>
        <Button color='black' size='base' className='mt-24'>
          로그인
        </Button>
      </Link>
    </div>
  )
}
