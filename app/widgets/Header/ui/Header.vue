<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UHeader
    :ui="{
      container: 'max-w-[1440px] mx-auto px-6 lg:px-12',
      root: 'border-b-0 shadow-none'
    }"
  >
    <template #left>
      <NuxtLink to="/articles" class="text-2xl font-bold tracking-tight text-[var(--qtimuikit-bnw-0)] font-sans hover:opacity-70 transition-opacity">
        QTIM
      </NuxtLink>
    </template>

    <template #right>
      <div class="hidden md:flex items-center gap-8 text-base font-medium text-[var(--qtimuikit-bnw-0)]">
        <NuxtLink to="/works" class="hover:opacity-60 transition-opacity">Works</NuxtLink>
        <NuxtLink to="/about" class="hover:opacity-60 transition-opacity">About</NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <button class="w-9 h-9 rounded-full overflow-hidden border border-[var(--qtimuikit-bnw-3)] hover:border-[var(--qtimuikit-bnw-2)] transition-colors">
          <img src="https://flagcdn.com/w40/gb.png" alt="English" class="w-full h-full object-cover">
        </button>
        <UButton
          color="neutral"
          class="rounded-full px-6 font-medium bg-[var(--qtimuikit-bnw-0)] text-[var(--qtimuikit-bnw-4)] hover:bg-[var(--qtimuikit-bnw-1)]"
        >
          Let's work
        </UButton>
        <!-- <UColorModeButton /> -->
      </div>
    </template>
  </UHeader>
</template>