import type { Post } from '~/types/post'

const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work'

export const usePosts = (page: Ref<number>, limit: number = 8) => {
  const { data, pending, error, refresh } = useFetch<Post[]>(() => `${BASE_URL}/posts`, {
    query: { page, limit },
    onResponse({ response }) {
      const total = parseInt(response.headers.get('X-Total-Count') || '0', 10)
      totalPages.value = Math.ceil(total / limit)
      totalItems.value = total
    },
    watch: [page],
    deep: false
  })

  const totalItems = ref(0)
  const totalPages = ref(0)

  return {
    posts: computed(() => data.value || []),
    loading: pending,
    error,
    totalPages: readonly(totalPages),
    totalItems: readonly(totalItems),
    refresh
  }
}
