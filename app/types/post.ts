export interface Post {
  id: string
  title: string
  description?: string
  body?: string
  image?: string
  createdAt?: string
}

export interface PostsResponse {
  data: Post[]
  total: number
  page: number
  limit: number
  totalPages: number
}
