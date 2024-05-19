// abc1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhD0yeQcUEDU8tn0cvpvApuadr3nE5Vm

let users = [
  {
    id: '1',
    nickname: 'bob',
    password: '$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhD0yeQcUEDU8tn0cvpvApuadr3nE5Vm',
    email: 'bob@gmail.com',
  },
]

export async function findByEmail(email) {
  console.log('users 확인', users)

  return users.find((user) => user.email === email)
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() }
  users.push(created)

  console.log('새로운 회원가입자 확인', users)

  return created.id
}
