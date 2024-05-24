import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {
  initialChecked?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}

export default function Checkbox({
  initialChecked = false,
  className = '',
  onChange,
}: Props) {
  const [isChecked, setIsChecked] = useState(initialChecked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)

    if (onChange) {
      onChange(event.target.checked)
    }
  }

  return (
    <div
      className={`relative w-6 h-6 rounded-[5px] border ${
        isChecked ? 'bg-main-black' : 'border-[#E1E1E1] bg-[#F9F9F9]'
      } ${className}`}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='appearance-none absolute w-full h-full cursor-pointer'
      />
      {isChecked && (
        <FaCheck className='absolute m-1 p-[2px] text-main-white pointer-events-none' />
      )}
    </div>
  )
}
