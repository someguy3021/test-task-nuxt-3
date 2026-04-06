import { computed, type Ref } from 'vue'

export const usePagination = (totalPages: Ref<number>, currentPage: Ref<number>) => {
  const visiblePages = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1)
    }
    const pages = new Set<number>()
    pages.add(1)
    pages.add(total)
    pages.add(current)
    if (current - 1 > 1) pages.add(current - 1)
    if (current + 1 < total) pages.add(current + 1)
    return Array.from(pages).sort((a, b) => a - b)
  })

  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
  }

  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
  }

  return {
    visiblePages,
    nextPage,
    prevPage
  }
}
