import { PropsWithChildren } from 'react'

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'md' | 'lg'
  color: 'black' | 'white' | 'orange' | 'grey'
  active?: boolean
}
// xs : 58 / 40
// sm : 127 / 37
// md : 127 / 48
// lg : 383 / 52
// 댓글 버튼은 따로 빼기

export default function Button({
  size = 'sm',
  color = 'black',
  active = false,
  children,
  className,
  ...props
}: PropsWithChildren<props>) {
  const sizes = {
    xs: 'w-[58px] h-10',
    sm: 'w-[127px] h-[37px]',
    md: 'w-[127px] h-[48px]',
    lg: 'w-[383px] h-[52px]',
  }

  const colors = {
    black: 'bg-main-black text-white rounded hover:bg-hover-dark',
    white:
      'bg-main-white text-main-black rounded border-[1px] border-hover-light hover:bg-hover-light',
    grey: 'bg-main-grey text-white rounded hover:bg-slate-300',
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
