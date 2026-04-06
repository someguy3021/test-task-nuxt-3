<template>
  <div v-if="totalPages > 1" class="flex items-center gap-2">
    <UButton
      v-if="currentPage > 1"
      variant="outline"
      color="neutral"
      class="rounded-full w-10 h-10 flex items-center justify-center border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)]"
      icon="i-lucide-chevron-left"
      :disabled="disabled"
      @click="currentPage = currentPage - 1"
    />

    <UButton
      v-for="p in visiblePages"
      :key="p"
      :variant="currentPage === p ? 'solid' : 'outline'"
      :color="currentPage === p ? 'neutral' : 'neutral'"
      :class="[
        'rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium transition-all duration-200',
        currentPage === p
          ? 'bg-[var(--qtimuikit-bnw-0)] text-[var(--qtimuikit-bnw-4)] border-transparent'
          : 'bg-[var(--qtimuikit-bnw-4)] text-[var(--qtimuikit-bnw-0)] border border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)]'
      ]"
      :label="String(p)"
      :disabled="disabled"
      @click="currentPage = p"
    />

    <UButton
      v-if="currentPage < totalPages"
      variant="outline"
      color="neutral"
      class="rounded-full w-10 h-10 flex items-center justify-center border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)]"
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