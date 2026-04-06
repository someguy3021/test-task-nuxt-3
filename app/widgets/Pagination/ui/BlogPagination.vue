<template>
  <div v-if="totalPages > 1" class="flex items-center gap-2">
    <!-- Назад -->
    <UButton
      v-if="currentPage > 1"
      variant="outline"
      color="neutral"
      class="rounded-xl w-10 h-10 flex items-center justify-center border border-[var(--qtimuikit-bnw-3)] bg-white"
      icon="i-lucide-chevron-left"
      :disabled="disabled"
      @click="currentPage = currentPage - 1"
    />

    <!-- Страницы -->
    <UButton
      v-for="p in visiblePages"
      :key="p"
      :variant="currentPage === p ? 'solid' : 'ghost'"
      :color="currentPage === p ? 'neutral' : 'neutral'"
      class="rounded-xl w-10 h-10 text-sm font-medium flex items-center justify-center border-0"
      :class="currentPage === p
        ? 'bg-[var(--qtimuikit-bnw-0)] text-white'
        : 'bg-[var(--qtimuikit-bnw-3)] text-[var(--qtimuikit-bnw-0)]'"
      :label="String(p)"
      :disabled="disabled"
      @click="currentPage = p"
    />

    <!-- Вперёд -->
    <UButton
      v-if="currentPage < totalPages"
      variant="outline"
      color="neutral"
      class="rounded-xl w-10 h-10 flex items-center justify-center border border-[var(--qtimuikit-bnw-3)] bg-white"
      icon="i-lucide-chevron-right"
      :disabled="disabled"
      @click="currentPage = currentPage + 1"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  totalPages: number
  modelValue: number
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [page: number]
}>()

const currentPage = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const visiblePages = computed(() => {
  const total = props.totalPages
  const current = props.modelValue
  const maxVisible = 5

  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  let start = current - Math.floor(maxVisible / 2)
  let end = current + Math.floor(maxVisible / 2)

  if (start < 1) {
    start = 1
    end = maxVisible
  }
  if (end > total) {
    end = total
    start = total - maxVisible + 1
  }

  return Array.from({ length: maxVisible }, (_, i) => start + i)
})
</script>