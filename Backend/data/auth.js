// abc1234: '$2b$12$r2WjIn2iDEV//ooNVk75T.3iFgXo6955T1FqyDTvxIUGSZIXSlByC',
// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MTYxMDUwOTgxNDIiLCJpYXQiOjE3MTYxMDYxMzksImV4cCI6MTcxNjI3ODkzOX0.gVUB63oKYL9qROqBuo10zcugQzESuKLZPeNn1GqLoHM
let users = [
  {
    nickname: 'ea',
    password: '$2b$12$r2WjIn2iDEV//ooNVk75T.3iFgXo6955T1FqyDTvxIUGSZIXSlByC',
    email: 'ea@gmail.com',
    id: '1716105098142',
  },
]

export async function findByEmail(email) {
  // console.log('users 확인', users)

  return users.find((user) => user.email === email)
}

export async function findById(id) {
  return users.find((user) => user.id === id)
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() }
  users.push(created)

  // console.log('새로운 회원가입자 확인', users)

  return created.id
}
