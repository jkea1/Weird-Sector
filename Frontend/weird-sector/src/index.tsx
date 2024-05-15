import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/Auth/Login/Login'
import SignUp from './pages/Auth/SignUp/SignUp'
import SignUpComplete from './pages/Auth/SignUpComplete/SignUpComplete'
import Board from './pages/Board/Board'
import DashBoard from './pages/DashBoard/DashBoard'
import NotFound from './pages/NotFound/NotFound'
import Post from './pages/Post/Post'
import PostCreate from './pages/PostCreate/PostCreate'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/board/:category', element: <Board /> },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/signUp/complete',
        element: <SignUpComplete />,
      },
      {
        path: '/board/:category',
        element: <Board />,
      },
      {
        path: '/post/:category/:id',
        element: <Post />,
      },
      {
        path: '/post/:category/create',
        element: <PostCreate />,
      },
      {
        path: '/dashBoard/:category',
        element: <DashBoard />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
