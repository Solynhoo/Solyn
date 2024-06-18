<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
defineOgImageComponent('Frame', {
  image: '/assets/og.png',
  username: 'Solyn',
})
</script>

<template>
  <AppLayout>
    <OgImage />
    <SpeedInsights />
    <NuxtPage />
  </AppLayout>
</template>

<style>
html {
  font-family: $dt('font.sans');
}
</style>
