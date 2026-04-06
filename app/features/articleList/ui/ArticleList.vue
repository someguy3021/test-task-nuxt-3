<template>
  <div>
    <div v-if="loading" class="flex justify-center py-20">
      <div class="w-10 h-10 border-4 border-[var(--qtimuikit-bnw-3)] border-t-[var(--qtimuikit-bnw-0)] rounded-full animate-spin"/>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500">Ошибка загрузки статей</p>
      <UButton class="mt-4" @click="refetch">Повторить</UButton>
    </div>

    <template v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-6 lg:gap-y-12 mb-16">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
          @click="navigateTo(`/articles/${article.id}`)"
        />
      </div>

      <BlogPagination
        v-model="currentPage"
        :total-pages="totalPages"
      />
    </template>
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