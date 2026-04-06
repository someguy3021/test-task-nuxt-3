import { ref } from 'vue'
import { getArticles } from '~/entities/article/api/getArticles'
import type { Article } from '~/entities/article/model/article'

export const useArticleList = (page: Ref<number>, limit: number = 8) => {
  const articles = ref<Article[]>([])
  const loading = ref(false)
  const error = ref<unknown>(null)
  const totalPages = ref(0)
  const totalItems = ref(0)

  const fetchArticles = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await getArticles(page.value, limit)
      articles.value = data

      // mockapi.io отдаёт X-Total-Count в заголовках, но в чистом $fetch его нет
      // Для простоты сделаем предположение, что если пришло меньше лимита, то это последняя страница
      // Но лучше использовать отдельный запрос для подсчёта. Здесь для демонстрации:
      if (data.length < limit) {
        totalPages.value = page.value
      } else {
        totalPages.value = page.value + 1 // упрощённо
      }
      totalItems.value = articles.value.length
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  watch(page, fetchArticles, { immediate: true })

  return {
    articles,
    loading,
    error,
    totalPages,
    totalItems,
    refetch: fetchArticles
  }
}
