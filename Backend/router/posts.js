import express from 'express'
import 'express-async-errors'

// db 대신할 임시 데이터
const posts = [
  {
    id: '1',
    category: 'free',
    title: '새로운 게시물 생성',
    text: 'new message :)',
    nickname: 'ea',
    createdAt: Date.now().toString(),
    viewCount: '20344',
    file: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg',
    hashtag: ['새로운', '게시물', '생성'],
    comment: [
      {
        username: '진경',
        commentText: '댓글을 생성하다.',
        createdAt: Date.now().toString(),
      },
      {
        username: '에릭',
        commentText: '에릭이 댓글을 생성하다.',
        createdAt: Date.now().toString(),
      },
    ],
  },
]

// /posts가 default 기본이다.
// GET /posts/:category

// GET /posts/:id
// GET /posts?hashtag=:id
// POST /posts
// PUT /posts/:id
// DELETE /posts/:id

const router = express.Router()

export default router
