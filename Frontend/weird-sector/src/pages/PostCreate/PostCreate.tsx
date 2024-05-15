import Button from '../../components/common/Button'

export default function PostCreate() {
  return (
    <div className='my-0 h-[921px] flex flex-col justify-center items-center relative top-[88px]'>
      <h1 className='text-[#040404] text-[32px] font-bold mt-16 mb-10'>
        게시글 작성
      </h1>
      <div className='flex flex-col gap-y-4 text-xl'>
        <div className='flex items-center gap-x-2'>
          <h2 className='text-xl font-bold w-[140px]'>제목</h2>
          <input
            className='w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4'
            type='text'
          />
        </div>
        <div className='flex gap-x-2'>
          <h2 className='text-xl font-bold w-[140px] pt-3'>내용</h2>
          <input
            className='w-[984px] h-[320px] border-[1px] rounded border-[#E1E1E1] px-5 py-4'
            type='text'
          />
        </div>
        <div className='flex items-center gap-x-2'>
          <h2 className='text-xl font-bold w-[140px]'>파일 첨부</h2>
          <input
            className='w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4'
            type='text'
          />
        </div>
        <div className='flex items-center gap-x-2'>
          <h2 className='text-xl font-bold w-[140px]'>해시태그</h2>
          <input
            className='w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4'
            type='text'
          />
        </div>
      </div>
      <Button color='black' size='lg' className='my-11'>
        게시글 작성
      </Button>
    </div>
  )
}
