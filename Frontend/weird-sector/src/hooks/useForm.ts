import { useState } from 'react'

export default function useForm() {
  const [value, setValue] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.currentTarget.value)
  }

  return [value, handleChange] as const
}
