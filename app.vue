<template>
  <AppLayout>
    <SpeedInsights />
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>
<style>
html {
  font-family: $dt('font.sans');
}
</style>
