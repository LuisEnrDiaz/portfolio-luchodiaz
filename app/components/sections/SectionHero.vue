<script setup lang="ts">
import { site } from '~/data/portfolio'
</script>

<template>
  <section id="inicio" class="hero u-grain">
    <UiContainer class="hero__inner">
      <div class="hero__content u-stack u-stack--lg">
        <p class="u-eyebrow hero__eyebrow">{{ site.role }}</p>

        <h1 class="u-display font-chango u-text-balance hero__brand">
          {{ site.name }}
        </h1>

        <p class="u-lead u-text-pretty hero__lead">
          {{ site.description }}
        </p>

        <div class="u-cluster u-cluster--lg hero__actions">
          <UiButton href="#proyectos" icon="lucide:arrow-right">
            Ver proyectos
          </UiButton>
          <UiButton href="#contacto" variant="ghost">
            Hablar
          </UiButton>
        </div>
      </div>

      <aside class="hero__aside" aria-hidden="true">
        <div class="hero__panel">
          <div class="hero__horizon" />
          <div class="hero__peak" />
          <p class="hero__aside-text u-serif">
            Código · Diseño · Naturaleza
          </p>
        </div>
      </aside>
    </UiContainer>

    <div class="hero__scroll" aria-hidden="true">
      <span class="u-meta">Desliza</span>
      <span class="hero__scroll-line" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100svh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: clamp(3rem, 8vh, 6rem) clamp(4rem, 10vh, 7rem);
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 85% 20%, var(--color-accent-soft), transparent 55%),
    radial-gradient(ellipse 50% 40% at 10% 90%, color-mix(in srgb, var(--color-text) 4%, transparent), transparent 50%),
    var(--color-bg);
}

.hero__inner {
  display: grid;
  gap: var(--space-12);
  align-items: center;
  width: 100%;
}

.hero__eyebrow {
  color: var(--color-accent-muted);
}

.hero__brand {
  max-width: 12ch;
}

.hero__lead {
  max-width: 28rem;
}

.hero__aside {
  display: none;
}

.hero__panel {
  position: relative;
  aspect-ratio: 4 / 5;
  max-height: 34rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background:
    linear-gradient(180deg, #e8e4db 0%, #d5d0c5 38%, #9aa897 72%, #4f6356 100%);
}

.hero__horizon {
  position: absolute;
  inset: auto 0 38% 0;
  height: 1px;
  background: rgba(248, 247, 244, 0.35);
}

.hero__peak {
  position: absolute;
  left: 18%;
  right: 22%;
  bottom: 18%;
  height: 42%;
  background: linear-gradient(180deg, transparent 0%, rgba(28, 28, 28, 0.18) 100%);
  clip-path: polygon(18% 100%, 48% 12%, 55% 28%, 72% 8%, 100% 100%, 0 100%);
}

.hero__aside-text {
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  color: rgba(248, 247, 244, 0.9);
  font-size: var(--text-lg);
  font-style: italic;
}

.hero__scroll {
  position: absolute;
  left: var(--gutter);
  bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-text-tertiary);
}

.hero__scroll-line {
  display: block;
  width: 2.5rem;
  height: 1px;
  background: var(--color-border-strong);
  transform-origin: left center;
  animation: scroll-pulse 2.4s var(--ease-in-out) infinite;
}

@keyframes scroll-pulse {
  0%,
  100% {
    transform: scaleX(0.55);
    opacity: 0.5;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@media (min-width: 960px) {
  .hero__inner {
    grid-template-columns: 1.15fr 0.85fr;
    gap: var(--space-16);
  }

  .hero__aside {
    display: block;
  }

  .hero__scroll {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
