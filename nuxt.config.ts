// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss'],
  icon: {
    collections: ['lucide'],
    serverBundle: 'local',
  },
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      {
        name: 'Instrument Serif',
        provider: 'google',
        weights: [400],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Chango',
        provider: 'google',
        weights: [400],
      },
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Lucho Díaz — Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Frontend Developer · Vue 3 y TypeScript · Desarrollo interfaces de aplicaciones SaaS centradas en la experiencia de usuario',
        },
        { name: 'theme-color', content: '#F8F7F4' },
      ],
      script: [
        {
          src: '/theme-init.js',
          tagPriority: 'critical',
        },
      ],
    },
  },
})
