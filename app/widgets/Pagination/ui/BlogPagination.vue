<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="totalPages > 1" class="flex items-center gap-2">
    <UButton
      v-if="currentPage > 1"
      class="rounded-full"
      variant="outline"
      color="neutral"
      icon="i-lucide-chevron-left"
      @click="prevPage"
    />

    <UButton
      v-for="p in visiblePages"
      :key="p"
      :variant="currentPage === p ? 'solid' : 'outline'"
      :color="currentPage === p ? 'primary' : 'neutral'"
      class="rounded-full"
      @click="currentPage = p"
    >
      {{ p }}
    </UButton>

    <UButton
      v-if="currentPage < totalPages"
      class="rounded-full"
      variant="outline"
      color="neutral"
      icon="i-lucide-chevron-right"
      @click="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePagination } from '../model/usePagination'

const props = defineProps<{
  totalPages: number
  modelValue: number
}>()

const emit = defineEmits<{
  'update:modelValue': [page: number]
}>()

const currentPage = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const totalPagesRef = computed(() => props.totalPages)

const { visiblePages, nextPage, prevPage } = usePagination(totalPagesRef, currentPage)
</script>