<template>
  <div class="min-h-screen bg-[var(--qtimuikit-bnw-4)] flex flex-col">
    <!-- Header (как у тебя, без изменений) -->
    <header class="flex items-center justify-between px-6 lg:px-12 py-6 max-w-[1440px] mx-auto w-full">
      <NuxtLink
        to="/articles"
        class="text-2xl font-bold tracking-tight text-[var(--qtimuikit-bnw-0)] font-sans hover:opacity-70 transition-opacity"
      >
        QTIM
      </NuxtLink>
      <nav class="flex items-center gap-6 lg:gap-8">
        <div class="hidden md:flex items-center gap-8 text-base font-medium text-[var(--qtimuikit-bnw-0)]">
          <NuxtLink
            to="/works"
            class="hover:opacity-60 transition-opacity"
          >Works</NuxtLink>
          <NuxtLink
            to="/about"
            class="hover:opacity-60 transition-opacity"
          >About</NuxtLink>
        </div>
        <div class="flex items-center gap-3">
          <button class="w-9 h-9 rounded-full overflow-hidden border border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)] transition-colors">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              class="w-full h-full object-cover"
            >
          </button>
          <UButton
            color="neutral"
            class="rounded-full px-6 font-medium bg-[var(--qtimuikit-bnw-0)] text-[var(--qtimuikit-bnw-4)] hover:bg-[var(--qtimuikit-bnw-1)]"
          >
            Let's work
          </UButton>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto w-full">
      <h1 class="text-4xl lg:text-6xl font-bold text-[var(--qtimuikit-bnw-0)] mb-10 lg:mb-16 tracking-tight font-sans">
        Articles
      </h1>

      <!-- Состояние загрузки -->
      <div
        v-if="loading"
        class="flex justify-center py-20"
      >
        <div class="w-10 h-10 border-4 border-[var(--qtimuikit-bnw-3)] border-t-[var(--qtimuikit-bnw-0)] rounded-full animate-spin" />
      </div>

      <!-- Ошибка -->
      <div
        v-else-if="error"
        class="text-center py-20"
      >
        <p class="text-red-500">
          Ошибка загрузки статей. Попробуйте позже.
        </p>
        <UButton
          class="mt-4"
          @click="() => refresh()"
        >
          Повторить
        </UButton>
      </div>

      <!-- Список статей -->
      <template v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-6 lg:gap-y-12 mb-16">
          <article
            v-for="post in posts"
            :key="post.id"
            class="group cursor-pointer flex flex-col"
            @click="navigateTo(`/articles/${post.id}`)"
          >
            <div class="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-[var(--qtimuikit-bnw-3)]">
              <img
                :src="post.image || 'https://via.placeholder.com/400x300?text=No+Image'"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
            </div>
            <div class="space-y-3 flex-1 flex flex-col">
              <p class="text-sm lg:text-base text-[var(--qtimuikit-bnw-0)] leading-relaxed line-clamp-3 font-sans">
                {{ post.title }}
              </p>
              <div class="mt-auto pt-2">
                <span class="text-sm text-[var(--qtimuikit-lightpurple)] font-medium border-b border-transparent hover:border-[var(--qtimuikit-lightpurple)] transition-all cursor-pointer font-sans">
                  Read more
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- Пагинация -->
        <BlogPagination
          v-model:current-page="currentPage"
          :total-pages="totalPages"
        />
      </template>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { usePosts } from '~/composables/usePosts'

const currentPage = ref(1)
const limit = 8

const { posts, loading, error, totalPages, refresh } = usePosts(currentPage, limit)

// SEO
useHead({
  title: 'Articles - QTIM',
  meta: [
    { name: 'description', content: 'Latest articles from QTIM team' }
  ]
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
</style>
