import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/common/Button'
import useForm from '../../../hooks/useForm'
import { login } from '../../../service/auth'

export default function Login() {
  const [email, handleEmail] = useForm()
  const [password, handlePassword] = useForm()
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const validate = () => {
    let valid = true

    let newErrors = {
      email: '',
      password: '',
    }

    if (!email) {
      newErrors.email = '이메일을 입력해주세요'
      valid = false
    }

    if (!password) {
      newErrors.password = '비밀번호를 입력해주세요'
      valid = false
    }

    setErrors(newErrors)

    return valid
  }

  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/board/free')
    },
    onError: (err) => {
      // console.log(err)
      alert(err)
    },
  })

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validate()) {
      try {
        mutation.mutate({ email, password })
      } catch (error) {
        alert('회원가입에 실패했습니다!')
      }
    }
  }

  return (
    <div className='my-0 h-[711px] flex flex-col justify-center items-center relative top-[88px]'>
      <h1 className='text-[#040404] text-[32px] font-bold mb-4'>로그인</h1>
      <form onSubmit={handleLogin}>
        <div className='flex flex-col gap-y-2'>
          <input
            className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
            type='email'
            placeholder='이메일 주소'
            onChange={handleEmail}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}
          <input
            className='w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5'
            type='password'
            placeholder='비밀번호 입력'
            onChange={handlePassword}
          />
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password}</p>
          )}
        </div>
        <Button color='black' size='xl' className='my-3'>
          로그인
        </Button>
      </form>
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
