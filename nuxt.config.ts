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
      { name: 'Bricolage Grotesque', provider: 'google', weights: [400, 500, 600, 700, 800] },
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Lucho Díaz: Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Frontend Developer en WeWelcom. Vue 3 y TypeScript: del trato con el cliente al diseño y la funcionalidad de aplicaciones en producción.',
        },
        { name: 'theme-color', content: '#ECEEF1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
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
