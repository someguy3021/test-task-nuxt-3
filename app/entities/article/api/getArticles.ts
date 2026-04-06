import { $fetch } from '~/shared/api/client'
import type { Article } from '../model/article'

export const getArticles = async (page: number, limit: number) => {
  return $fetch<Article[]>('/posts', { query: { page, limit } })
}

export const getArticleById = async (id: string) => {
  return $fetch<Article>(`/posts/${id}`)
}