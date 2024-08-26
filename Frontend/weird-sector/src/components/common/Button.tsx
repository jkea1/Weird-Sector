import { PropsWithChildren } from 'react'

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl'
  color: 'black' | 'white' | 'orange' | 'grey'
  active?: boolean
}

// xs: 'w-[58px] h-10', text-sm, weight-500 (삭제 모달)
// sm: 'w-[127px] h-[37px]', text-sm, weight-400(font-normal) (boardTapSelector)
// base: 'w-[127px] h-[48px]', text-lg, weight-500 (로그인, 회원가입 완료, board)
// md: 'w-[142px] h-[48px]', text-lg (18px), weight-500 (회원가입)
// lg: 'w-[162px] h-[48px]', text-lg, weight-500 (글 작성)
// xl: 'w-[383px] h-[52px]', text-lg, weight-500 (로그인)

export default function Button({
  size = 'sm',
  color = 'black',
  active = false,
  children,
  className,
  ...props
}: PropsWithChildren<props>) {
  const sizes = {
    xs: 'w-[58px] h-10 text-sm',
    sm: 'w-[127px] h-[37px] text-sm font-normal',
    base: 'w-[127px] h-[48px] text-lg',
    md: 'w-[142px] h-[48px] text-lg',
    lg: 'w-[162px] h-[48px] text-lg',
    xl: 'w-[383px] h-[52px] text-lg',
  }

  const colors = {
    black: 'bg-main-black text-white rounded hover:bg-hover-dark',
    white:
      'bg-main-white text-main-black rounded border-[1px] border-hover-light hover:bg-hover-light',
    grey: 'bg-[#EEEEEE] text-main-black rounded hover:bg-gray-300',
    orange: 'bg-main-orange text-white rounded hover:bg-orange-600',
  }

  return (
    <button
      className={`${sizes[size]} ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
