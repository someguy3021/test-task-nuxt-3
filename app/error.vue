<script setup lang="ts">
const handleError = () => clearError({ redirect: '/articles' })
</script>

<template>
  <div class="min-h-screen bg-[var(--qtimuikit-bnw-4)] flex items-center justify-center px-6">
    <div class="text-center max-w-md">
      <h1 class="text-6xl lg:text-8xl font-bold text-[var(--qtimuikit-bnw-0)] mb-6">
        404
      </h1>
      <p class="text-xl text-[var(--qtimuikit-bnw-2)] mb-8 font-sans">
        Страница не найдена
      </p>
      <UButton
        class="rounded-full px-8 py-3 font-medium bg-[var(--qtimuikit-bnw-0)] text-[var(--qtimuikit-bnw-4)] hover:bg-[var(--qtimuikit-bnw-1)]"
        @click="handleError"
      >
        Вернуться к статьям
      </UButton>
    </div>
  </div>
</template>
