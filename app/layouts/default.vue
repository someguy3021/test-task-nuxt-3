<template>
  <UApp>
    <Header />
    <UMain>
      <NuxtPage />
    </UMain>
    <Footer />
  </UApp>
</template>

<script setup lang="ts">
import Header from '~/widgets/Header/ui/Header.vue'
import Footer from '~/widgets/Footer/ui/Footer.vue'
</script>