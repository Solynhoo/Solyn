<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

useSeoMeta({
  twitterTitle: '🌱 Solyn',
  twitterCard: 'summary_large_image',
  twitterDescription: '🌱 O meu site pessoal!',
  twitterImage: '/assets/og.png',
  ogImage: '/assets/og.png'
})

useHead({
  htmlAttrs: {
    lang: 'pt'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <AppLayout>
    <SpeedInsights />
    <NuxtPage />
  </AppLayout>
</template>

<style>
html {
  font-family: $dt('font.sans');
}
</style>
