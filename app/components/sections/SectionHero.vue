<script setup lang="ts">
import { site } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapHero(root)
</script>

<template>
  <section id="inicio" ref="root" class="hero u-grid-bg">
    <div class="hero__glow" aria-hidden="true" />

    <UiContainer class="hero__inner">
      <div class="hero__content u-stack u-stack--lg">
        <p data-gsap="hero" class="u-eyebrow">
          {{ site.role }} · {{ site.location }}
        </p>

        <h1 data-gsap="hero" class="u-display u-text-balance hero__title">
          {{ site.greeting }}
        </h1>

        <p data-gsap="hero" class="u-lead u-text-pretty hero__statement">
          {{ site.statement }}
        </p>

        <nav data-gsap="hero" class="hero__links" aria-label="Perfiles">
          <a
            :href="site.linkedin"
            class="hero__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="lucide:linkedin" size="15" aria-hidden="true" />
            LinkedIn
          </a>
          <a :href="`mailto:${site.email}`" class="hero__link">
            <Icon name="lucide:mail" size="15" aria-hidden="true" />
            Email
          </a>
        </nav>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100svh - 4rem);
  display: flex;
  align-items: center;
  padding-block: clamp(5rem, 14vh, 9rem);
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  width: min(80vw, 48rem);
  height: min(50vw, 28rem);
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, var(--color-glow), transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero__inner {
  width: 100%;
}

.hero__content {
  max-width: 42rem;
}

.hero__title {
  max-width: 16ch;
}

.hero__statement {
  max-width: 34rem;
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-elevated);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition:
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.hero__link:hover {
  color: var(--color-text);
  border-color: var(--color-border-strong);
  background: var(--color-bg-subtle);
}
</style>
