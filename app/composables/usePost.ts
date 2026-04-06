import type { Post } from '~/types/post'

const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work'

export const usePost = (id: string | Ref<string>) => {
  const { data, pending, error, refresh } = useFetch<Post>(() => `${BASE_URL}/posts/${unref(id)}`)

  return {
    post: data,
    loading: pending,
    error,
    refresh
  }
}
