type props = {
  children: string
}

export default function HashTag({ children = '' }: props) {
  return (
    <div className='bg-[#EEEEEE] h-8 p-4 rounded-full font-medium text-base flex flex-col justify-center'>
      {`#${children}`}
    </div>
  )
}
