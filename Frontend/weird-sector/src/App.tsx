import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <h1 className='text-blue-700'>App component</h1>
      <Outlet />
    </>
  )
}
