<template>
  <div class="min-h-screen bg-[var(--qtimuikit-bnw-4)] flex flex-col">
    <!-- Header такой же как на списке -->
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

    <main class="flex-1 px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto w-full">
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
        <UButton
          to="/articles"
          class="mt-4"
        >
          Вернуться к списку
        </UButton>
      </div>

      <template v-else-if="post">
        <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-[var(--qtimuikit-bnw-0)] mb-12 lg:mb-16 tracking-tight font-sans max-w-4xl leading-[1.1]">
          {{ post.title }}
        </h1>

        <div class="w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg mb-12 lg:mb-16 bg-[var(--qtimuikit-bnw-3)]">
          <img
            :src="post.image || 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&auto=format&fit=crop&q=80'"
            :alt="post.title"
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
                {{ post.body || post.description || 'No content available' }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { usePost } from '~/composables/usePost'

const route = useRoute()
const id = route.params.id as string

const { post, loading, error } = usePost(id)

// Динамический SEO
useHead(() => ({
  title: post.value?.title ? `${post.value.title} - QTIM` : 'Loading...',
  meta: [
    { name: 'description', content: post.value?.description || post.value?.body?.slice(0, 160) || 'Article from QTIM' }
  ]
}))
</script>
