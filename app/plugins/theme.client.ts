export default defineNuxtPlugin((nuxtApp) => {
  const { initTheme } = useTheme()

  // Sincronizar el estado del tema solo tras hidratar: si se hace antes,
  // el cliente renderiza (p. ej. el icono del botón) distinto al HTML del servidor.
  nuxtApp.hook('app:mounted', () => {
    initTheme()

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const stored = localStorage.getItem('portfolio-theme')
      if (stored !== 'light' && stored !== 'dark') {
        initTheme()
      }
    }

    media.addEventListener('change', onChange)
  })
})
