import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

function ensurePlugin() {
  if (import.meta.server || registered) return
  gsap.registerPlugin(ScrollTrigger)
  registered = true
}

function reduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function showAll(root: HTMLElement, selector: string) {
  root.querySelectorAll(selector).forEach((el) => {
    gsap.set(el, { clearProps: 'all', opacity: 1, y: 0, filter: 'none' })
  })
}

export function useGsap() {
  ensurePlugin()
  return { gsap, ScrollTrigger }
}

/** Hero entrance: staggered fade + rise */
export function useGsapHero(root: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined
  onBeforeUnmount(() => ctx?.revert())

  onMounted(async () => {
    await nextTick()
    if (!root.value) return

    const selector = '[data-gsap="hero"]'
    if (reduceMotion()) {
      showAll(root.value, selector)
      return
    }

    const { gsap } = useGsap()
    ctx = gsap.context(() => {
      const words = root.value!.querySelectorAll('[data-gsap="mask"]')
      if (words.length) {
        gsap.fromTo(
          words,
          { yPercent: 115 },
          { yPercent: 0, duration: 1.2, stagger: 0.1, ease: 'expo.out' },
        )
      }

      const items = root.value!.querySelectorAll(selector)
      if (!items.length) return

      gsap.fromTo(
        items,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.05,
          stagger: 0.1,
          ease: 'power3.out',
        },
      )
    }, root.value)
  })
}

/** Count-up for numbers marked with data-count (final value is server-rendered) */
export function useGsapCounters(root: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined
  onBeforeUnmount(() => ctx?.revert())

  onMounted(async () => {
    await nextTick()
    if (!root.value || reduceMotion()) return

    const { gsap } = useGsap()
    ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count)
        if (Number.isNaN(target)) return
        const state = { value: 0 }
        el.textContent = '0'

        gsap.to(state, {
          value: target,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(state.value))
          },
          onComplete: () => {
            el.textContent = String(target)
          },
        })
      })
    }, root.value)
  })
}
