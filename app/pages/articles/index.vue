<template>
  <div class="min-h-screen bg-[var(--qtimuikit-bnw-4)] flex flex-col">
    <div class="flex-1 px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto w-full">
      <h1 class="text-4xl lg:text-6xl font-bold text-[var(--qtimuikit-bnw-0)] mb-10 lg:mb-16 tracking-tight font-sans">
        Articles
      </h1>
      <ArticleList />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleList from '~/features/articleList/ui/ArticleList.vue'

useHead({
  title: 'Articles - QTIM',
  meta: [{ name: 'description', content: 'Latest articles from QTIM team' }]
})
</script>
