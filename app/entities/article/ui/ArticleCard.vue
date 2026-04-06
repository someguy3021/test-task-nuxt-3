<template>
  <article class="group cursor-pointer flex flex-col" @click="emit('click')">
    <div class="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-[var(--qtimuikit-bnw-3)]">
      <img
        :src="article.image || defaultImage"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
    </div>
    <div class="space-y-3 flex-1 flex flex-col">
      <p class="text-sm lg:text-base text-[var(--qtimuikit-bnw-0)] leading-relaxed line-clamp-3 font-sans">
        {{ article.title }}
      </p>
      <div class="mt-auto pt-2">
        <span class="text-sm text-[var(--qtimuikit-lightpurple)] font-medium border-b border-transparent hover:border-[var(--qtimuikit-lightpurple)] transition-all cursor-pointer font-sans">
          Read more
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '../model/article'

defineProps<{
  article: Article
}>()

const emit = defineEmits<{
  click: []
}>()

const defaultImage = 'https://via.placeholder.com/400x300?text=No+Image'
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>