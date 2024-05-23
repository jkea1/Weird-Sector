import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import useForm from '../../hooks/useForm'
import { createPost } from '../../service/posts'

export default function PostCreate() {
  const [title, handleTitle] = useForm()
  const [text, handleText] = useForm()
  const [hashtag, handleHashtag] = useForm()
  const [file, handleFile] = useForm()

  const [errors, setErrors] = useState({
    title: '',
    text: '',
    hashtag: '',
    file: '',
  })

  const { category: param } = useParams()
  let category = param ?? 'free'

  const navigate = useNavigate()

  const validate = () => {
    let valid = true
    let newErrors = {
      title: '',
      text: '',
      hashtag: '',
      file: '',
    }

    if (!title) {
      newErrors.title = '제목을 입력해주세요!'
      valid = false
    }

    if (!text) {
      newErrors.text = '내용을 입력해주세요!'
      valid = false
    }

    setErrors(newErrors)

    return valid
  }

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      navigate(`/board/${category}`)
    },
    onError: (err) => {
      console.log('post create err', err)
      alert(err)
    },
  })

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validate()) {
      try {
        mutation.mutate({ category, title, text, hashtag, file })
      } catch (error) {
        alert(error)
      }
    }
  }

  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className='my-0 h-[921px] flex flex-col justify-center items-center relative top-[88px]'>
      <h1 className='text-[#040404] text-[32px] font-bold mt-16 mb-10'>
        게시글 작성
      </h1>
      <form
        className='flex flex-col gap-y-4 text-xl'
        onSubmit={handleCreatePost}
      >
        <div className='flex items-center gap-x-2'>
          <h2 className='text-xl font-bold w-[140px]'>제목</h2>
          <input
            className='w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4 placeholder-main-orange'
            type='text'
            onChange={handleTitle}
            placeholder={errors.title && errors.title}
          />
        </div>
        <div className='flex gap-x-2'>
          <h2 className='text-xl font-bold w-[140px] pt-3'>내용</h2>
          <textarea
            className='w-[984px] h-[320px] border-[1px] rounded border-[#E1E1E1] px-5 py-4 placeholder-main-orange'
            onChange={handleText}
            placeholder={errors.text && errors.text}
          />
        </div>
        <div className='flex items-center gap-x-2'>
          <h2 className='text-xl font-bold w-[140px]'>파일 첨부</h2>
          <input
            ref={fileInputRef}
            className='hidden'
            type='file'
            onChange={handleFile}
          />
          <button
            className='w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4 bg-white cursor-pointer'
            onClick={handleButtonClick}
          />
        </div>
        <div className='flex items-center gap-x-2'>
          <h2 className='text-xl font-bold w-[140px]'>해시태그</h2>
          <input
            className='w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4'
            type='text'
            placeholder='# 을 붙여주세요!  ex) #해시 #태그 #게시글 #작성'
            onChange={handleHashtag}
          />
        </div>
        <Button color='black' size='lg' className='relative left-[970px]'>
          게시글 작성
        </Button>
      </form>
    </div>
  )
}
