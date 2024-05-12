import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'

export default function Login() {
  return (
    <div className='my-0 h-[711px] flex flex-col justify-center items-center relative top-[88px]'>
      <h1 className='text-[#040404] text-[32px] font-bold mb-4'>로그인</h1>
      <div className='flex flex-col gap-y-2'>
        <input
          className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
          type='text'
          placeholder='이메일 주소'
        />
        <input
          className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
          type='text'
          placeholder='비밀번호 입력'
        />
      </div>
      <Button color='black' size='lg' className='my-3'>
        로그인
      </Button>
      <div>
        <ul className='flex text-sm'>
          <li className='text-[#808080] border-r-[1.2px] border-[#808080] px-8 my-1'>
            아이디 찾기
          </li>
          <li className='text-[#808080] border-r-[1.2px] border-[#808080] px-8 my-1'>
            비밀번호 찾기
          </li>
          <li className='px-8 my-1'>
            <Link to='/signUp'>회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
