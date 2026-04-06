<template>
  <div>
    <div v-if="error" class="text-center py-20">
      <p class="text-red-500">Ошибка загрузки статей</p>
      <UButton class="mt-4" @click="refetch">Повторить</UButton>
    </div>

    <div v-else>
      <!-- Сетка с фиксированной минимальной высотой -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-6 lg:gap-y-12 mb-16 min-h-[800px]">
        <ArticleCard
          v-for="i in limit"
          :key="i"
          :skeleton="loading"
          :article="loading ? undefined : articles[i-1]"
          @click="!loading && navigateTo(`/articles/${articles[i-1]?.id}`)"
        />
      </div>

      <BlogPagination
        v-model="currentPage"
        :total-pages="totalPages"
        :disabled="loading"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticleList } from '../model/useArticleList'
import ArticleCard from '~/entities/article/ui/ArticleCard.vue'
import BlogPagination from '~/widgets/Pagination/ui/BlogPagination.vue'

const currentPage = ref(1)
const limit = 8

const { articles, loading, error, totalPages, refetch } = useArticleList(currentPage, limit)
</script>