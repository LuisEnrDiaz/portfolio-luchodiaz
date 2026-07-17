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
    <UiContainer>
      <div class="header__bar">
        <a href="#inicio" class="header__brand" @click="closeDrawer">
          {{ site.name }}
        </a>

        <nav class="header__nav" aria-label="Principal">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="header__link"
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
          <p class="nav-drawer__brand">{{ site.name }}</p>
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
              class="nav-drawer__link"
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
  border-bottom: 1px solid transparent;
  background: var(--color-header);
  backdrop-filter: blur(16px) saturate(1.5);
  -webkit-backdrop-filter: blur(16px) saturate(1.5);
  transition:
    border-color var(--duration-base) var(--ease-out),
    background-color var(--duration-base) var(--ease-out);
}

.header--scrolled {
  border-bottom-color: var(--color-border);
  background: var(--color-header-scrolled);
}

.header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3.5rem;
  gap: var(--space-6);
}

.header__brand {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-snug);
  transition: opacity var(--duration-fast) var(--ease-out);
}

.header__brand:hover {
  opacity: 0.65;
}

.header__nav {
  display: none;
  align-items: center;
  gap: 0.15rem;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.header__link {
  padding: 0.4rem 0.7rem;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition:
    color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.header__link:hover {
  color: var(--color-text);
  background: var(--color-bg-subtle);
}

.header__toggle {
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: background-color var(--duration-fast) var(--ease-out);
}

.header__toggle:hover {
  background: var(--color-bg-subtle);
}

.header__burger {
  position: relative;
  display: block;
  width: 1.1rem;
  height: 0.7rem;
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
    transform 400ms var(--ease-out),
    opacity 200ms var(--ease-out),
    top 400ms var(--ease-out);
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
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity var(--duration-base) var(--ease-out);
}

.nav-drawer-root.is-open .nav-drawer__scrim {
  opacity: 1;
}

.nav-drawer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: min(20rem, 88vw);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  padding: var(--space-6);
  background: var(--color-bg);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 500ms var(--ease-out);
}

.nav-drawer-root.is-open .nav-drawer {
  transform: translateX(0);
}

.nav-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 2.5rem;
  opacity: 0;
  transform: translateX(-0.5rem);
  transition:
    opacity 350ms var(--ease-out) 60ms,
    transform 350ms var(--ease-out) 60ms;
}

.nav-drawer-root.is-open .nav-drawer__header {
  opacity: 1;
  transform: translateX(0);
}

.nav-drawer__brand {
  font-size: var(--text-sm);
  font-weight: 600;
}

.nav-drawer__close {
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
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
  padding-block: 0.55rem;
  font-size: var(--text-xl);
  font-weight: 500;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text);
  opacity: 0;
  transform: translateX(-0.5rem);
  transition:
    color var(--duration-fast) var(--ease-out),
    opacity 400ms var(--ease-out),
    transform 400ms var(--ease-out);
}

.nav-drawer-root.is-open .nav-drawer__link {
  opacity: 1;
  transform: translateX(0);
}

.nav-drawer-root.is-open .nav-drawer__list li:nth-child(1) .nav-drawer__link {
  transition-delay: 80ms;
}
.nav-drawer-root.is-open .nav-drawer__list li:nth-child(2) .nav-drawer__link {
  transition-delay: 120ms;
}
.nav-drawer-root.is-open .nav-drawer__list li:nth-child(3) .nav-drawer__link {
  transition-delay: 160ms;
}
.nav-drawer-root.is-open .nav-drawer__list li:nth-child(4) .nav-drawer__link {
  transition-delay: 200ms;
}
.nav-drawer-root.is-open .nav-drawer__list li:nth-child(5) .nav-drawer__link {
  transition-delay: 240ms;
}

.nav-drawer__link:hover,
.nav-drawer__link:focus-visible {
  color: var(--color-accent);
}

.nav-drawer__meta {
  margin-top: auto;
  opacity: 0;
  transition: opacity 400ms var(--ease-out) 200ms;
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
