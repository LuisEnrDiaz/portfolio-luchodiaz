export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme(): Theme {
  if (import.meta.server) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#000000' : '#FAFAFA')
  }
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

async function animateThemeCircle() {
  const x = window.innerWidth / 2
  const y = window.innerHeight / 2
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${radius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration: 1400,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'both',
      pseudoElement: '::view-transition-new(root)',
    },
  )
}

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')

  const isDark = computed(() => theme.value === 'dark')

  function setTheme(next: Theme) {
    theme.value = next
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, next)
      applyTheme(next)
    }
  }

  async function toggleTheme() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'

    if (import.meta.server) {
      setTheme(next)
      return
    }

    const canTransition
      = typeof document.startViewTransition === 'function' && !prefersReducedMotion()

    if (!canTransition) {
      setTheme(next)
      return
    }

    const transition = document.startViewTransition(() => {
      setTheme(next)
    })

    try {
      await transition.ready
      animateThemeCircle()
    }
    catch {
      // Transition aborted or unsupported mid-flight
    }
  }

  function initTheme() {
    if (import.meta.server) return

    const stored = localStorage.getItem(STORAGE_KEY)
    const next: Theme = stored === 'light' || stored === 'dark' ? stored : getSystemTheme()
    theme.value = next
    applyTheme(next)
  }

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme,
  }
}
