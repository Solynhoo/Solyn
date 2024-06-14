import { createResolver, logger, defineNuxtModule } from '@nuxt/kit'
import { $fetch } from 'ofetch'

const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt'
      }
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark'
  },
  site: {
    url: 'https://solyn.xyz',
    name: '🌱 Solyn',
    description: '🌱 O meu site pessoal!',
    defaultLocale: 'pt'
  },
  robots: {
    disallow: ['/_src/', '/_nuxt/', '/_logs/', '/cdn-cgi/'],
    blockNonSeoBots: true,
    credits: false,
    debug: true,
    sitemap: ['/sitemap.xml']
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      name: '🌱 Solyn',
      url: 'https://solyn.xyz',
      logo: 'https://solyn.xyz/assets/avatar.png'
    }
  },
  extends: ['@nuxt-themes/typography', '@nuxt-themes/elements'],
  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL
    }
  },
  pages: true,
  modules: [
    '@nuxt-themes/tokens',
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxtjs/seo',
    'nuxt-icon'

  ],
  components: [
    { path: resolve('./components'), global: true },
    { path: resolve('./components/content'), global: true },
    { path: resolve('./components/data-entry'), global: true }
  ],
  css: [
    resolve('./assets/main.css'),
  ],
  pinceau: {
    studio: true
  },
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini', 'c', 'cpp']
    }
  },
  typescript: {
    includeWorkspace: true
  },
  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
})
