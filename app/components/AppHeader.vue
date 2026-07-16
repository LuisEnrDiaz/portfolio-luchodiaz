<script setup lang="ts">
import { navLinks, site } from '~/data/portfolio'

const DRAWER_ID = 'nav-drawer'

const open = ref(false)
const scrolled = ref(false)
const toggleRef = ref<HTMLButtonElement | null>(null)
const drawerRef = ref<HTMLElement | null>(null)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function openDrawer() {
  open.value = true
}

function closeDrawer() {
  if (!open.value) return
  open.value = false
  nextTick(() => {
    toggleRef.value?.focus()
  })
}

function toggleDrawer() {
  if (open.value) closeDrawer()
  else openDrawer()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    event.preventDefault()
    closeDrawer()
  }
}

function onResize() {
  if (window.matchMedia('(min-width: 900px)').matches && open.value) {
    closeDrawer()
  }
}

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''

  if (value) {
    nextTick(() => {
      const firstLink = drawerRef.value?.querySelector<HTMLElement>('a[href]')
      firstLink?.focus()
    })
  }
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <UiContainer class="header__inner">
      <a href="#inicio" class="header__brand font-chango" @click="closeDrawer">
        {{ site.name }}
      </a>

      <nav class="header__nav" aria-label="Principal">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="header__link u-underline"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="header__actions">
        <ThemeToggle />

        <button
          ref="toggleRef"
          class="header__toggle"
          type="button"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-controls="DRAWER_ID"
          @click="toggleDrawer"
        >
          <span class="u-sr-only">{{ open ? 'Cerrar menú' : 'Abrir menú' }}</span>
          <span class="header__burger" :class="{ 'is-open': open }" aria-hidden="true">
            <span class="header__burger-line" />
            <span class="header__burger-line" />
            <span class="header__burger-line" />
          </span>
        </button>
      </div>
    </UiContainer>
  </header>

  <Teleport to="body">
    <div
      class="nav-drawer-root"
      :class="{ 'is-open': open }"
    >
      <div
        class="nav-drawer__scrim"
        tabindex="-1"
        :aria-hidden="open ? 'false' : 'true'"
        @click="closeDrawer"
      />

      <nav
        :id="DRAWER_ID"
        ref="drawerRef"
        class="nav-drawer"
        aria-label="Navegación"
        :aria-hidden="open ? 'false' : 'true'"
        :inert="!open"
      >
        <div class="nav-drawer__header">
          <p class="nav-drawer__brand font-chango">{{ site.name }}</p>
          <button
            class="nav-drawer__close"
            type="button"
            aria-label="Cerrar menú"
            @click="closeDrawer"
          >
            <Icon name="lucide:x" size="20" aria-hidden="true" />
          </button>
        </div>

        <ul class="nav-drawer__list u-stack u-stack--md">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="nav-drawer__link u-serif"
              @click="closeDrawer"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <p class="nav-drawer__meta u-meta">{{ site.role }}</p>
      </nav>
    </div>
  </Teleport>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(14px);
  background: var(--color-header);
  border-bottom: 1px solid transparent;
  transition:
    border-color var(--duration-base) var(--ease-out),
    background-color var(--duration-base) var(--ease-out);
}

.header--scrolled {
  border-bottom-color: var(--color-border);
  background: var(--color-header-scrolled);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  gap: var(--space-6);
}

.header__brand {
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-snug);
  transition: opacity var(--duration-fast) var(--ease-out);
}

.header__brand:hover {
  opacity: 0.7;
}

.header__nav {
  display: none;
  align-items: center;
  gap: var(--space-6);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.header__link {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: color var(--duration-fast) var(--ease-out);
}

.header__link:hover {
  color: var(--color-text);
}

.header__toggle {
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: background-color 280ms var(--ease-out);
}

.header__toggle:hover {
  background: var(--color-bg-subtle);
}

.header__burger {
  position: relative;
  display: block;
  width: 1.15rem;
  height: 0.75rem;
}

.header__burger-line {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 1.5px;
  border-radius: 1px;
  background: currentColor;
  transform-origin: center;
  transition:
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 280ms cubic-bezier(0.22, 1, 0.36, 1),
    top 480ms cubic-bezier(0.22, 1, 0.36, 1);
}

.header__burger-line:nth-child(1) {
  top: 0;
}

.header__burger-line:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.header__burger-line:nth-child(3) {
  top: calc(100% - 1.5px);
}

.header__burger.is-open .header__burger-line:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.header__burger.is-open .header__burger-line:nth-child(2) {
  opacity: 0;
  transform: translateY(-50%) scaleX(0.4);
}

.header__burger.is-open .header__burger-line:nth-child(3) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.nav-drawer-root {
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
}

.nav-drawer-root.is-open {
  pointer-events: auto;
}

.nav-drawer__scrim {
  position: absolute;
  inset: 0;
  background: var(--color-scrim);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition:
    opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
    backdrop-filter 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-drawer-root.is-open .nav-drawer__scrim {
  opacity: 1;
}

.nav-drawer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(20rem, 86vw);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  padding: var(--space-6) var(--space-6) var(--space-8);
  background: var(--color-bg);
  border-right: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-drawer-root.is-open .nav-drawer {
  transform: translateX(0);
}

.nav-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  min-height: 2.75rem;
  opacity: 0;
  transform: translateX(-0.75rem);
  transition:
    opacity 420ms cubic-bezier(0.22, 1, 0.36, 1) 80ms,
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1) 80ms;
}

.nav-drawer-root.is-open .nav-drawer__header {
  opacity: 1;
  transform: translateX(0);
}

.nav-drawer__brand {
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-snug);
}

.nav-drawer__close {
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  transition:
    background-color 280ms var(--ease-out),
    color 280ms var(--ease-out),
    transform 280ms var(--ease-out);
}

.nav-drawer__close:hover {
  background: var(--color-bg-subtle);
  color: var(--color-text);
}

.nav-drawer__list {
  flex: 1;
}

.nav-drawer__link {
  display: block;
  font-size: var(--text-2xl);
  letter-spacing: var(--tracking-snug);
  color: var(--color-text);
  opacity: 0;
  transform: translateX(-0.85rem);
  transition:
    color 280ms var(--ease-out),
    opacity 480ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-drawer-root.is-open .nav-drawer__link {
  opacity: 1;
  transform: translateX(0);
}

.nav-drawer-root.is-open .nav-drawer__list li:nth-child(1) .nav-drawer__link {
  transition-delay: 120ms;
}

.nav-drawer-root.is-open .nav-drawer__list li:nth-child(2) .nav-drawer__link {
  transition-delay: 170ms;
}

.nav-drawer-root.is-open .nav-drawer__list li:nth-child(3) .nav-drawer__link {
  transition-delay: 220ms;
}

.nav-drawer-root.is-open .nav-drawer__list li:nth-child(4) .nav-drawer__link {
  transition-delay: 270ms;
}

.nav-drawer-root.is-open .nav-drawer__list li:nth-child(5) .nav-drawer__link {
  transition-delay: 320ms;
}

.nav-drawer__link:hover,
.nav-drawer__link:focus-visible {
  color: var(--color-accent);
}

.nav-drawer__meta {
  margin-top: auto;
  opacity: 0;
  transition: opacity 480ms cubic-bezier(0.22, 1, 0.36, 1) 280ms;
}

.nav-drawer-root.is-open .nav-drawer__meta {
  opacity: 1;
}

@media (min-width: 900px) {
  .header__nav {
    display: flex;
  }

  .header__toggle {
    display: none;
  }

  .nav-drawer-root {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .header__burger-line,
  .nav-drawer__scrim,
  .nav-drawer,
  .nav-drawer__header,
  .nav-drawer__link,
  .nav-drawer__meta {
    transition: none !important;
  }

  .nav-drawer__header,
  .nav-drawer__link,
  .nav-drawer__meta {
    opacity: 1;
    transform: none;
  }
}
</style>
