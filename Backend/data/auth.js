// abc1234: '$2b$12$r2WjIn2iDEV//ooNVk75T.3iFgXo6955T1FqyDTvxIUGSZIXSlByC',
// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTYxMzg1MTAsImV4cCI6MTcxNjMxMTMxMH0.B5lgnmiv6PDqM5AdFA1LJYMufbMZJcFaCKSc8jjQOJ0
let users = [
  {
    userId: '1716105098142',
    nickname: 'ea',
    password: '$2b$12$r2WjIn2iDEV//ooNVk75T.3iFgXo6955T1FqyDTvxIUGSZIXSlByC',
    email: 'ea@gmail.com',
  },
]

export async function findByEmail(email) {
  // console.log('users 확인', users)

  return users.find((user) => user.email === email)
}

export async function findById(userId) {
  return users.find((user) => user.userId === userId)
}

export async function createUser(user) {
  const created = { ...user, userId: Date.now().toString() }
  users.push(created)

  console.log('새로운 회원가입자 확인', users)

  return created.userId
}
