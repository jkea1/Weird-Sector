import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/common/Button'
import Checkbox from '../../../components/domain/signUp/Checkbox'
import useForm from '../../../hooks/useForm'
import { signup } from '../../../service/auth'

export default function SignUp() {
  const [email, handleEmail] = useForm()
  const [password, handlePassword] = useForm()
  const [confirmPassword, handleConfirmPassword] = useForm()
  const [nickname, handleNickname] = useForm()
  const [agree, setAgree] = useState(true)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    agree: '',
  })

  const validate = () => {
    let valid = true
    let newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      agree: '',
    }

    if (!email) {
      newErrors.email = '이메일을 입력해주세요.'
      valid = false
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if (!password || !passwordRegex.test(password)) {
      newErrors.password =
        '비밀번호는 8자 이상, 영문자, 숫자, 특수기호 중 2가지 조합이어야 합니다.'

      valid = false
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.'
      valid = false
    }

    if (!nickname) {
      newErrors.nickname = '닉네임을 입력해주세요.'
      valid = false
    }

    if (!agree) {
      newErrors.agree = '개인정보 처리 방침 및 데이터 활용에 동의해주세요.'
      valid = false
    }

    setErrors(newErrors)

    return valid
  }

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      navigate('/signUp/complete')
    },
    onError: (err) => {
      alert(err)
    },
  })

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validate()) {
      try {
        mutation.mutate({ email, password, nickname })
      } catch (error) {
        alert('회원가입에 실패했습니다!')
      }
    }
  }

  return (
    <div className='my-0 h-[1111px] flex flex-col justify-center items-center relative top-[88px]'>
      <h1 className='text-[#040404] text-[32px] font-bold mb-16'>회원가입</h1>
      <form className='flex flex-col gap-y-6' onSubmit={handleSignUp}>
        <div>
          <h2 className='text-base font-bold mb-2'>이메일</h2>
          <input
            className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
            type='email'
            onChange={handleEmail}
          />
          {errors.email && (
            <p className='text-red-500 text-sm relative top-2'>
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <h2 className='text-base font-bold mb-2'>비밀번호</h2>
          <div className='flex flex-col gap-y-2'>
            <input
              className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
              type='password'
              placeholder='8자 이상, 영문자, 숫자, 특수기호중 2가지 조합'
              onChange={handlePassword}
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password}</p>
            )}
            <input
              className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
              type='password'
              placeholder='비밀번호를 다시 입력해주세요'
              onChange={handleConfirmPassword}
            />
            {errors.confirmPassword && (
              <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <div>
          <h2 className='text-base font-bold mb-2'>닉네임</h2>
          <input
            className='w-96 h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
            type='text'
            onChange={handleNickname}
          />
          {errors.nickname && (
            <p className='text-red-500 text-sm relative top-2'>
              {errors.nickname}
            </p>
          )}
        </div>
        <div className='w-[384px] h-[75px] bg-[#F9F9F9] flex justify-center items-center text-base gap-x-2 rounded-lg my-2'>
          <Checkbox
            initialChecked={agree}
            onChange={(checked) => setAgree(checked)}
          />
          <h3>개인정보 처리방침 / 데이터 활용 동의</h3>
          <h3 className='text-[#808080]'>(필수)</h3>
        </div>
        {errors.agree && (
          <p className='text-red-500 text-sm relative bottom-6'>
            {errors.agree}
          </p>
        )}
        <div className='w-[100%] flex justify-center'>
          <Button color='black' size='md' className='mt-12'>
            회원가입
          </Button>
        </div>
      </form>
    </div>
  )
}
