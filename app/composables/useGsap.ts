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
  onMounted(async () => {
    await nextTick()
    if (!root.value) return

    const selector = '[data-gsap="hero"]'
    if (reduceMotion()) {
      showAll(root.value, selector)
      return
    }

    const { gsap } = useGsap()
    const ctx = gsap.context(() => {
      const items = root.value!.querySelectorAll(selector)
      if (!items.length) return

      gsap.fromTo(
        items,
        { y: 36, opacity: 0, filter: 'blur(8px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.05,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'filter',
        },
      )
    }, root.value)

    onBeforeUnmount(() => ctx.revert())
  })
}

/** Scroll reveal for section blocks */
export function useGsapReveal(
  root: Ref<HTMLElement | null>,
  selector = '[data-gsap="reveal"]',
) {
  onMounted(async () => {
    await nextTick()
    if (!root.value) return

    if (reduceMotion()) {
      showAll(root.value, selector)
      return
    }

    const { gsap } = useGsap()
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLElement>(selector)
      nodes.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, opacity: 0, filter: 'blur(6px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.95,
            ease: 'power3.out',
            clearProps: 'filter',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        )
      })
    }, root.value)

    onBeforeUnmount(() => ctx.revert())
  })
}

/** Project cards: fade in + light scrub on visual */
export function useGsapProjectCards(root: Ref<HTMLElement | null>) {
  onMounted(async () => {
    await nextTick()
    if (!root.value) return

    if (reduceMotion()) {
      showAll(root.value, '[data-gsap="project"]')
      return
    }

    const { gsap } = useGsap()
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-gsap="project"]')
      cards.forEach((card) => {
        const visual = card.querySelector('[data-gsap="project-visual"]')

        gsap.fromTo(
          card,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        )

        if (visual) {
          gsap.fromTo(
            visual,
            { y: 20, scale: 1.03 },
            {
              y: 0,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            },
          )
        }
      })
    }, root.value)

    onBeforeUnmount(() => ctx.revert())
  })
}
