export default defineNuxtPlugin(() => {
  const { initTheme } = useTheme()

  if (import.meta.client) {
    initTheme()

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const stored = localStorage.getItem('portfolio-theme')
      if (stored !== 'light' && stored !== 'dark') {
        initTheme()
      }
    }

    media.addEventListener('change', onChange)
  }
})
