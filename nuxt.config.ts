// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon'],
  icon: {
    collections: ['lucide'],
    serverBundle: 'local',
  },
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
      { name: 'Geist Mono', provider: 'google' },
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Lucho Díaz — Frontend Engineer',
      meta: [
        {
          name: 'description',
          content:
            'Construyo productos digitales de principio a fin. Diseño y desarrollo aplicaciones rápidas, intuitivas y escalables.',
        },
        { name: 'theme-color', content: '#FAFAFA' },
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
