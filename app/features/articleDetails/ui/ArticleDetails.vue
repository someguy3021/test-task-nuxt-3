<template>
  <div>
    <div
      v-if="loading"
      class="flex justify-center py-20"
    >
      <div class="w-10 h-10 border-4 border-[var(--qtimuikit-bnw-3)] border-t-[var(--qtimuikit-bnw-0)] rounded-full animate-spin" />
    </div>

    <div
      v-else-if="error"
      class="text-center py-20"
    >
      <p class="text-red-500">
        Статья не найдена
      </p>
      <UButton to="/articles">
        Вернуться к списку
      </UButton>
    </div>

    <template v-else-if="article">
      <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--qtimuikit-bnw-0)] mb-12 lg:mb-16 tracking-tight font-sans max-w-4xl leading-[1.1]">
        {{ article.title }}
      </h1>

      <!-- Блок изображения -->
      <div class="w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg mb-12 lg:mb-16 bg-[var(--qtimuikit-bnw-3)]">
        <template v-if="article.image && !imageError">
          <NuxtImg
            :src="article.image"
            :alt="article.title"
            :custom="true"
            width="1200"
            height="630"
            format="webp"
            class="w-full h-full"
            @error="imageError = true"
            @load="imageLoaded = true"
          >
            <template #default="{ src, isLoaded }">
              <img
                v-if="isLoaded && !imageError"
                :src="src"
                :alt="article.title"
                class="w-full h-full object-cover"
              >
              <div
                v-else
                class="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gray-100"
              >
                <UIcon
                  name="lucide:image-off"
                  class="w-12 h-12 text-[var(--qtimuikit-bnw-2)] mb-3"
                />
                <p class="text-sm text-[var(--qtimuikit-bnw-2)] font-sans">
                  К сожалению, API не предоставляет картинки
                </p>
              </div>
            </template>
          </NuxtImg>
        </template>

        <div
          v-else
          class="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gray-100"
        >
          <UIcon
            name="lucide:image-off"
            class="w-12 h-12 text-[var(--qtimuikit-bnw-2)] mb-3"
          />
          <p class="text-sm text-[var(--qtimuikit-bnw-2)] font-sans">
            К сожалению, API не предоставляет картинки
          </p>
        </div>
      </div>

      <!-- Контент: About + текст в одной колонке, ширина 700px -->
      <div class="max-w-[700px]">
        <span class="text-sm text-[var(--qtimuikit-bnw-2)] font-medium font-sans block mb-4">
          About
        </span>
        <div class="prose prose-lg max-w-none">
          <p class="text-xl lg:text-2xl text-[var(--qtimuikit-bnw-0)] leading-relaxed font-sans">
            {{ article.body || article.description || 'No content available' }}
          </p>
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

const imageError = ref(false)
const imageLoaded = ref(false)

watch(() => article.value?.image, () => {
  imageError.value = false
  imageLoaded.value = false
})

useHead(() => ({
  title: article.value?.title ? `${article.value.title} - QTIM` : 'Loading...',
  meta: [
    { name: 'description', content: article.value?.description || article.value?.body?.slice(0, 160) || 'Article from QTIM' }
  ]
}))
</script>
