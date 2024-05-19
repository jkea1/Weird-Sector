import jwt from 'jsonwebtoken'
import * as userRepository from '../data/auth.js'

const AUTH_ERROR = { message: 'Authentication Error' }

export const isAuth = async (req, res, next) => {
  const authHeader = req.get('Authorization')

  console.log('authHeader check', authHeader)

  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR)
  }

  const token = authHeader.split(' ')[1]

  console.log('토큰 확인', token)

  // 나중에 감추기
  jwt.verify(
    token,
    'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z',
    async (error, decoded) => {
      if (error) {
        return res.status(401).json(AUTH_ERROR)
      }

      const user = await userRepository.findById(decoded.id)

      console.log('유저', user)

      if (!user) {
        return res.status(401).json(AUTH_ERROR)
      }

      req.userId = user.id
      next()
    }
  )
}
