/** Soft light that follows the pointer: sets --mx / --my (px) on the element. */
export function useSpotlight(root: Ref<HTMLElement | null>) {
  let raf = 0
  let target = { x: 0, y: 0 }
  let current = { x: 0, y: 0 }
  let el: HTMLElement | null = null

  function loop() {
    if (!el) return
    current.x += (target.x - current.x) * 0.12
    current.y += (target.y - current.y) * 0.12
    el.style.setProperty('--mx', `${current.x.toFixed(1)}px`)
    el.style.setProperty('--my', `${current.y.toFixed(1)}px`)

    const moving = Math.abs(target.x - current.x) > 0.5 || Math.abs(target.y - current.y) > 0.5
    raf = moving ? requestAnimationFrame(loop) : 0
  }

  function onMove(event: PointerEvent) {
    if (!el) return
    const rect = el.getBoundingClientRect()
    target = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    if (!raf) raf = requestAnimationFrame(loop)
  }

  onMounted(() => {
    el = root.value
    if (!el) return
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    const rect = el.getBoundingClientRect()
    target = { x: rect.width * 0.7, y: rect.height * 0.3 }
    current = { ...target }
    el.addEventListener('pointermove', onMove, { passive: true })
  })

  onBeforeUnmount(() => {
    if (raf) cancelAnimationFrame(raf)
    el?.removeEventListener('pointermove', onMove)
  })
}
