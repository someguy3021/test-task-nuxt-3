<template>
  <div>
    <div v-if="loading" class="flex justify-center py-20">
      <div class="w-10 h-10 border-4 border-[var(--qtimuikit-bnw-3)] border-t-[var(--qtimuikit-bnw-0)] rounded-full animate-spin"/>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500">Статья не найдена</p>
      <UButton to="/articles">Вернуться к списку</UButton>
    </div>

    <template v-else-if="article">
      <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--qtimuikit-bnw-0)] mb-12 lg:mb-16 tracking-tight font-sans max-w-4xl leading-[1.1]">
        {{ article.title }}
      </h1>

      <div class="w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg mb-12 lg:mb-16 bg-[var(--qtimuikit-bnw-3)]">
        <img
          :src="article.image || 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&auto=format&fit=crop&q=80'"
          :alt="article.title"
          class="w-full h-full object-cover"
        >
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-2">
          <span class="text-sm text-[var(--qtimuikit-bnw-2)] font-medium font-sans">About</span>
        </div>
        <div class="lg:col-span-7">
          <div class="prose prose-lg max-w-none">
            <p class="text-xl lg:text-2xl text-[var(--qtimuikit-bnw-0)] leading-relaxed font-sans">
              {{ article.body || article.description || 'No content available' }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useArticleDetails } from '../model/useArticleDetails'

const props = defineProps<{
  id: string
}>()

const idRef = computed(() => props.id)
const { article, loading, error } = useArticleDetails(idRef)

useHead(() => ({
  title: article.value?.title ? `${article.value.title} - QTIM` : 'Loading...',
  meta: [
    { name: 'description', content: article.value?.description || article.value?.body?.slice(0, 160) || 'Article from QTIM' }
  ]
}))
</script>