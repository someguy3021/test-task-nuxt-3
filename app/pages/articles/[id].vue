<template>
  <div class="min-h-screen bg-[var(--qtimuikit-bnw-4)] flex flex-col">
    <div class="flex-1 px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto w-full">
      <ArticleDetails :id="route.params.id as string" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleDetails from '~/features/articleDetails/ui/ArticleDetails.vue'

const route = useRoute()
</script>
