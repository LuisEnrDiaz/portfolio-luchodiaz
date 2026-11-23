<script setup lang="ts">
import { site } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapHero(root)

const words = site.greeting.split(' ')
</script>

<template>
  <section id="inicio" ref="root" class="hero">
    <UiContainer class="hero__inner">
      <div class="hero__layout">
        <div class="hero__content u-stack u-stack--lg">
          <p data-gsap="hero" class="hero__role">
            {{ site.role }}, {{ site.location }}
          </p>

          <h1 class="hero__title">
            <span class="u-sr-only">{{ site.greeting }}</span>
            <span
              v-for="(word, i) in words"
              :key="i"
              class="hero__mask"
              aria-hidden="true"
            >
              <span data-gsap="mask" class="hero__word">{{ word }}</span>
            </span>
          </h1>

          <div data-gsap="hero" class="hero__statements u-stack u-stack--sm">
            <p
              v-for="(line, i) in site.statements"
              :key="i"
              class="u-lead u-text-pretty"
            >
              {{ line }}
            </p>
          </div>

          <nav data-gsap="hero" class="hero__links" aria-label="Perfiles">
            <a
              :href="site.linkedin"
              class="hero__link hero__link--primary"
              target="_blank"
              rel="noopener noreferrer"
            >Ver LinkedIn</a>
            <a :href="`mailto:${site.email}`" class="hero__link">Escribir un email</a>
            <NuxtLink to="/cv" class="hero__link">Abrir el CV</NuxtLink>
          </nav>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100svh - 3.5rem);
  display: flex;
  align-items: center;
  padding-top: clamp(4rem, 12vh, 8rem);
  padding-bottom: 8rem;
}

.hero__inner {
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero__content {
  max-width: 40rem;
}

.hero__role {
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text-secondary);
}

.hero__title {
  margin: 0;
  text-wrap: balance;
  font-size: clamp(3.25rem, 8.4vw, 7.25rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.hero__mask {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  padding-bottom: 0.1em;
  margin-bottom: -0.1em;
  margin-right: 0.22em;
}

.hero__word {
  display: inline-block;
}

.hero__statements {
  max-width: 34rem;
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hero__link {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0 1.2rem;
  border: 2px solid var(--color-text);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);
}

.hero__link:hover {
  background: var(--color-text);
  color: var(--color-bg);
}

.hero__link--primary {
  border-color: var(--color-text);
  background: var(--color-signal);
  color: var(--color-accent-ink);
}

.hero__link--primary:hover {
  background: var(--color-text);
  color: var(--color-bg);
}
</style>
