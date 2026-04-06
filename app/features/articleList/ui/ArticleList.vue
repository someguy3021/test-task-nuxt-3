<template>
  <div>
    <!-- Ошибка -->
    <div v-if="error" class="text-center py-20">
      <p class="text-red-500">Ошибка загрузки статей</p>
      <UButton @click="refetch" class="mt-4">Повторить</UButton>
    </div>

    <!-- Список статей или скелетоны -->
    <template v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-6 lg:gap-y-12 mb-16">
        <!-- Скелетоны при загрузке -->
        <template v-if="loading">
          <div v-for="i in limit" :key="i" class="flex flex-col">
            <div class="aspect-[4/3] rounded-lg mb-4 bg-[var(--qtimuikit-bnw-3)] animate-pulse"></div>
            <div class="space-y-3">
              <div class="h-4 bg-[var(--qtimuikit-bnw-3)] rounded animate-pulse"></div>
              <div class="h-4 w-3/4 bg-[var(--qtimuikit-bnw-3)] rounded animate-pulse"></div>
              <div class="pt-2">
                <div class="h-3 w-20 bg-[var(--qtimuikit-lightpurple)]/30 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </template>

        <!-- Реальные статьи -->
        <template v-else>
          <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :article="article"
            @click="navigateTo(`/articles/${article.id}`)"
          />
        </template>
      </div>
    </template>

    <!-- Пагинация всегда видна, но disabled во время загрузки -->
    <BlogPagination
      v-model="currentPage"
      :total-pages="totalPages"
      :disabled="loading"
    />
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