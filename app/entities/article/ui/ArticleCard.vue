<template>
  <!-- Скелетон -->
  <div
    v-if="skeleton"
    class="flex flex-col"
  >
    <div class="aspect-[4/3] rounded-lg mb-4 bg-[var(--qtimuikit-bnw-3)] animate-pulse" />
    <div class="space-y-3 flex-1 flex flex-col">
      <div class="space-y-2">
        <div class="h-4 bg-[var(--qtimuikit-bnw-3)] rounded animate-pulse" />
        <div class="h-4 w-11/12 bg-[var(--qtimuikit-bnw-3)] rounded animate-pulse" />
        <div class="h-4 w-10/12 bg-[var(--qtimuikit-bnw-3)] rounded animate-pulse" />
      </div>
      <div class="mt-auto pt-2">
        <div class="h-3 w-20 bg-[var(--qtimuikit-lightpurple)]/30 rounded animate-pulse" />
      </div>
    </div>
  </div>

  <!-- Реальная карточка -->
  <div
    v-else-if="article"
    class="group cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-1"
    @click="emit('click')"
  >
    <div class="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-[var(--qtimuikit-bnw-3)]">
      <NuxtImg
        v-if="article.image"
        :src="article.image"
        :alt="article.title"
        :custom="true"
        width="400"
        height="300"
        format="webp"
        class="w-full h-full"
        @load="imageLoaded = true"
        @error="imageError = true"
      >
        <template #default="{ src, isLoaded }">
          <img
            v-if="isLoaded && !imageError"
            :src="src"
            :alt="article.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <div
            v-else
            class="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gray-100"
          >
            <UIcon
              name="lucide:image-off"
              class="w-8 h-8 text-[var(--qtimuikit-bnw-2)] mb-2"
            />
            <p class="text-xs text-[var(--qtimuikit-bnw-2)] font-sans">
              К сожалению, API не предоставляет картинки
            </p>
          </div>
        </template>
      </NuxtImg>
      <div
        v-else
        class="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gray-100"
      >
        <UIcon
          name="lucide:image-off"
          class="w-8 h-8 text-[var(--qtimuikit-bnw-2)] mb-2"
        />
        <p class="text-xs text-[var(--qtimuikit-bnw-2)] font-sans">
          К сожалению, API не предоставляет картинки
        </p>
      </div>
    </div>

    <div class="space-y-3 flex-1 flex flex-col">
      <p class="text-sm lg:text-base text-[var(--qtimuikit-bnw-0)] leading-relaxed line-clamp-3 font-sans">
        {{ article.title }}
      </p>
      <div class="mt-auto pt-2">
        <span
          class="read-more text-sm text-[var(--qtimuikit-lightpurple)] font-medium border-b border-transparent transition-all cursor-pointer font-sans opacity-0 group-hover:opacity-100 hover:border-[var(--qtimuikit-lightpurple)]"
        >
          Read more
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '../model/article'

const props = defineProps<{
  article?: Article
  skeleton?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const imageError = ref(false)
const imageLoaded = ref(false)

watch(() => props.article?.image, () => {
  imageError.value = false
  imageLoaded.value = false
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  transition: opacity 0.2s ease, border-color 0.2s ease;
}
</style>
