<template>
  <div
    v-if="totalPages > 1"
    class="flex items-center gap-2"
  >
    <!-- Кнопка "Назад" — только если страница > 1 -->
    <button
      v-if="currentPage > 1"
      class="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)] transition-colors"
      @click="emit('update:currentPage', currentPage - 1)"
    >
      <UIcon
        name="lucide:chevron-left"
        class="w-4 h-4 text-[var(--qtimuikit-bnw-2)]"
      />
    </button>

    <!-- Цифры страниц -->
    <button
      v-for="p in visiblePages"
      :key="p"
      :class="[
        'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 font-sans',
        currentPage === p
          ? 'bg-[var(--qtimuikit-bnw-0)] text-[var(--qtimuikit-bnw-4)]'
          : 'bg-[var(--qtimuikit-bnw-4)] text-[var(--qtimuikit-bnw-0)] border border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)]'
      ]"
      @click="emit('update:currentPage', p)"
    >
      {{ p }}
    </button>

    <!-- Кнопка "Вперёд" — всегда, кроме последней страницы -->
    <button
      v-if="currentPage < totalPages"
      class="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)] transition-colors"
      @click="emit('update:currentPage', currentPage + 1)"
    >
      <UIcon
        name="lucide:chevron-right"
        class="w-4 h-4 text-[var(--qtimuikit-bnw-2)]"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  'update:currentPage': [page: number]
}>()

const visiblePages = computed(() => {
  const total = props.totalPages
  const current = props.currentPage

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages = new Set<number>()
  pages.add(1)
  pages.add(total)
  pages.add(current)
  if (current - 1 > 1) pages.add(current - 1)
  if (current + 1 < total) pages.add(current + 1)

  return Array.from(pages).sort((a, b) => a - b)
})
</script>
