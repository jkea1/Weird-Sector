export interface Comment {
  nickname: string
  commentText: string
  createdAt: string
}

export interface Post {
  id: string
  category: string
  createdAt: string
  title: string
  text: string
  file: string
  hashtag: string[]
  comment?: Comment[]
  viewCount: string
  userId: string
  nickname: string
}
