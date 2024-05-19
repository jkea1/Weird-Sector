import * as userRepository from '../data/auth.js'
// db 대신할 메모리 상의 임시 데이터

let posts = [
  {
    id: '1',
    category: 'free',
    title: '새로운 게시물 생성',
    text: 'new message :)',
    nickname: 'ea',
    createdAt: new Date().toString(),
    userId: '1716105098142',
    viewCount: '20344',
    file: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg',
    hashtag: ['새로운', '게시물', '생성'],
    comment: [
      {
        nickname: '진경',
        commentText: '댓글을 생성하다.',
        createdAt: new Date().toString(),
      },
      {
        nickname: '에릭',
        commentText: '에릭이 댓글을 생성하다.',
        createdAt: new Date().toString(),
      },
    ],
  },
  {
    id: '2',
    category: 'question',
    title: '새로운 질문 게시물 생성',
    text: 'new question :)',
    nickname: '질문왕',
    createdAt: new Date().toString(),
    userId: '1716105098142',
    viewCount: '2104',
    file: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg',
    hashtag: ['새로운', '질문', '생성'],
    comment: [
      {
        nickname: '답변이',
        commentText: '답변을 생성하다.',
        createdAt: new Date().toString(),
      },
      {
        nickname: '유저',
        commentText: '유저가 댓글을 생성하다.',
        createdAt: Date.now().toString(),
      },
    ],
  },
]

export async function getAll() {
  return Promise.all(
    posts.map(async (post) => {
      const { nickname } = await userRepository.findById(post.userId)
      return { ...post, nickname }
    })
  )
  // return posts
}

export async function getAllByCategory(category) {
  return getAll().then((posts) =>
    posts.filter((post) => post.category === category)
  )
  // return posts.filter((post) => post.category === category)
}

export async function getById(id) {
  const found = posts.find((post) => post.id === id)

  console.log('found', found)

  if (!found) {
    return null
  }

  const { nickname } = await userRepository.findById(found.userId)
  return { ...found, nickname }

  // return posts.find((post) => post.id === id)
}

export async function create(category, title, text, file, hashtag, userId) {
  const post = {
    id: new Date().toString(),
    category,
    title,
    text,
    file,
    hashtag,
    viewCount: 0,
    createdAt: new Date(),
    userId,
  }

  posts = [post, ...posts]
  return getById(post.id)
}

export async function update(id, title, text, hashtag, file) {
  const post = posts.find((post) => post.id === id)

  if (post) {
    post.title = title
    post.text = text
    post.hashtag = hashtag
    post.file = file
  }

  return getById(post.id)
}

export async function remove(id) {
  posts = posts.filter((post) => post.id !== id)
}
