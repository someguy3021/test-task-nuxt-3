import { ref, watch } from 'vue'
import { getArticleById } from '~/entities/article/api/getArticles'
import type { Article } from '~/entities/article/model/article'

export const useArticleDetails = (id: Ref<string>) => {
  const article = ref<Article | null>(null)
  const loading = ref(false)
  const error = ref<unknown>(null)

  const fetchArticle = async () => {
    if (!id.value) return
    loading.value = true
    error.value = null
    try {
      const data = await getArticleById(id.value)
      article.value = data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  watch(id, fetchArticle, { immediate: true })

  return {
    article,
    loading,
    error,
    refetch: fetchArticle
  }
}
