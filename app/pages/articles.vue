<!-- pages/articles.vue -->
<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="flex items-center justify-between px-6 lg:px-12 py-6 max-w-[1440px] mx-auto">
      <div class="text-2xl font-bold tracking-tight text-black font-sans">
        QTIM
      </div>

      <nav class="flex items-center gap-6 lg:gap-8">
        <div class="hidden md:flex items-center gap-8 text-base font-medium text-gray-900">
          <NuxtLink
            to="/works"
            class="hover:opacity-60 transition-opacity"
          >
            Works
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="hover:opacity-60 transition-opacity"
          >
            About
          </NuxtLink>
        </div>

        <div class="flex items-center gap-3">
          <button class="w-9 h-9 rounded-full overflow-hidden border border-gray-200 hover:border-gray-400 transition-colors">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              class="w-full h-full object-cover"
            >
          </button>

          <UButton
            color="neutral"
            class="rounded-full px-6 font-medium bg-black text-white hover:bg-gray-900"
          >
            Let's work
          </UButton>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto">
      <h1 class="text-4xl lg:text-6xl font-bold text-black mb-10 lg:mb-16 tracking-tight font-sans">
        Articles
      </h1>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-6 lg:gap-y-12 mb-16">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="group cursor-pointer flex flex-col"
        >
          <div class="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <div class="space-y-3 flex-1 flex flex-col">
            <p class="text-sm lg:text-base text-gray-900 leading-relaxed line-clamp-3 font-sans">
              {{ article.title }}
            </p>

            <div
              v-if="article.hasLink"
              class="mt-auto pt-2"
            >
              <span class="text-sm text-purple-400 font-medium border-b border-purple-400/0 hover:border-purple-400 transition-all cursor-pointer font-sans">
                Read more
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div class="flex items-center gap-2">
        <button
          v-for="page in 5"
          :key="page"
          :class="[
            'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 font-sans',
            currentPage === page
              ? 'bg-black text-white'
              : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-400 hover:bg-gray-50'
          ]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>

        <button
          class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-colors"
          @click="nextPage"
        >
          <UIcon
            name="lucide:chevron-right"
            class="w-4 h-4 text-gray-600"
          />
        </button>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
interface Article {
  title: string
  image: string
  hasLink?: boolean
}

const currentPage = ref(1)

const articles = ref<Article[]>([
  {
    title: 'The guys from Qtim rewrote the entire site from scratch in a couple of months. In the proces...',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    hasLink: true
  },
  {
    title: 'One of the liveliest podcasts about working as a frontrunner. The authors don\'t hesitate to us...',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  },
  {
    title: 'A podcast for frontend developers that resembles a friendship meeting',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  },
  {
    title: 'At Test & Code, you can learn about software design',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  },
  {
    title: 'A podcast for frontend developers that resembles a friendship meeting',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  },
  {
    title: 'One of the liveliest podcasts about working as a frontrunner. The authors don\'t hesitate to us...',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  },
  {
    title: 'A podcast for frontend developers that resembles a friendship meeting',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  },
  {
    title: 'At Test & Code, you can learn about software design',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&auto=format&fit=crop&q=80',
    hasLink: false
  }
])

const nextPage = () => {
  if (currentPage.value < 5) {
    currentPage.value++
  }
}

useHead({
  title: 'Articles - QTIM',
  meta: [
    { name: 'description', content: 'Latest articles from QTIM team' }
  ]
})
</script>

<style>
/* Утилита для ограничения строк */
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
