import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import morgan from 'morgan' // 디버깅
import postsRouter from './router/posts'

const app = express()

// 미들웨어 세팅
app.use(express.json())
app.use(helmet())
app.use(cors()) // 일단 모든 콜스 허용
app.use(morgan('tiny'))

// 모든 posts와 관련된 요청은 postsRouter로 간다.
app.use('/posts', postsRouter)

// Not found
app.use((req, res, next) => {
  res.sendStatus(404)
})

// Error
app.use((error, req, res, next) => {
  console.error(error)
  res.sendStatus(500)
})

app.listen(8080)
