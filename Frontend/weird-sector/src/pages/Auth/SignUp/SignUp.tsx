import Button from '../../../components/common/Button'
import Checkbox from '../../../components/domain/signUp/Checkbox'

export default function SignUp() {
  return (
    <div className='my-0 h-[1111px] flex flex-col justify-center items-center relative top-[88px]'>
      <h1 className='text-[#040404] text-[32px] font-bold mb-16'>회원가입</h1>
      <div className='flex flex-col gap-y-6'>
        <div>
          <h2 className='text-base font-bold mb-2'>이메일</h2>
          <input
            className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
            type='text'
          />
        </div>
        <div>
          <h2 className='text-base font-bold mb-2'>비밀번호</h2>
          <div className='flex flex-col gap-y-2'>
            <input
              className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
              type='text'
              placeholder='8자 이상, 영문자, 숫자, 특수기호중 2가지 조합'
            />
            <input
              className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
              type='text'
              placeholder='비밀번호를 다시 입력해주세요'
            />
          </div>
        </div>
        <div>
          <h2 className='text-base font-bold mb-2'>닉네임</h2>
          <input
            className='w-96 h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
            type='text'
          />
        </div>
        <div className='w-[384px] h-[75px] bg-[#F9F9F9] flex justify-center items-center text-base gap-x-2 rounded-lg my-2'>
          <Checkbox />
          <h3>개인정보 처리방침 / 데이터 활용 동의</h3>
          <h3 className='text-[#808080]'>(필수)</h3>
        </div>
      </div>
      <Button color='black' size='md' className='mt-12'>
        회원가입
      </Button>
    </div>
  )
}
