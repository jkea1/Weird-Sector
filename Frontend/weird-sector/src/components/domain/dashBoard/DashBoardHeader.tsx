type props = {
  me: string
}

export default function DashBoardHeader({ me }: props) {
  return (
    <header className='flex justify-between h-[50px] border-b-[1px] border-[#E1E1E1] px-5 w-full'>
      <div className='text-xl flex items-center font-bold'>기본 데시보드</div>
      <div className='text-lg flex items-center font-medium'>{me ?? ''} 님</div>
    </header>
  )
}
