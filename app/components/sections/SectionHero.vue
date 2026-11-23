<script setup lang="ts">
import { site } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapHero(root)
useSpotlight(root)

const words = site.greeting.split(' ')
const lastWord = words.length - 1
</script>

<template>
  <section id="inicio" ref="root" class="hero u-grid-bg">
    <div class="hero__spot" aria-hidden="true" />

    <UiContainer class="hero__inner">
      <div class="hero__layout">
        <div class="hero__content u-stack u-stack--lg">
          <p data-gsap="hero" class="hero__eyebrow">
            <span class="hero__live" aria-hidden="true" />
            {{ site.role }} · {{ site.location }}
          </p>

          <h1 class="hero__title">
            <span class="u-sr-only">{{ site.greeting }}</span>
            <span
              v-for="(word, i) in words"
              :key="i"
              class="hero__mask"
              aria-hidden="true"
            >
              <span
                data-gsap="mask"
                class="hero__word"
                :class="{ 'hero__word--accent': i === lastWord }"
              >{{ word }}</span>
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
            >
              <Icon name="lucide:linkedin" size="15" aria-hidden="true" />
              LinkedIn
            </a>
            <a :href="`mailto:${site.email}`" class="hero__link">
              <Icon name="lucide:mail" size="15" aria-hidden="true" />
              Email
            </a>
            <NuxtLink to="/cv" class="hero__link">
              <Icon name="lucide:file-text" size="15" aria-hidden="true" />
              CV
            </NuxtLink>
          </nav>
        </div>

        <div data-gsap="hero" class="hero__visual">
          <HeroOrbits />
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
  overflow: hidden;
}

.hero__spot {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(
    36rem circle at var(--mx, 70%) var(--my, 30%),
    var(--color-accent-soft),
    transparent 62%
  );
}

.hero__spot::before,
.hero__spot::after {
  content: ;
  position: absolute;
  border-radius: 50%;
  background-image: radial-gradient(closest-side, var(--color-glow), transparent);
  pointer-events: none;
  animation: hero-drift 20s ease-in-out infinite;
}

.hero__spot::before {
  top: -10rem;
  right: -8rem;
  width: 32rem;
  height: 32rem;
  opacity: 0.7;
}

.hero__spot::after {
  bottom: -8rem;
  left: -10rem;
  width: 26rem;
  height: 26rem;
  opacity: 0.4;
  animation-delay: -8s;
}

.hero__inner {
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero__layout {
  display: grid;
  gap: var(--space-12);
  align-items: center;
}

.hero__content {
  max-width: 42rem;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent-muted);
}

.hero__live {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-accent);
  animation: hero-blink 2.4s ease-in-out infinite;
}

.hero__title {
  margin: 0;
  text-wrap: balance;
  font-size: clamp(3.25rem, 8.4vw, 7.25rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.05em;
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

.hero__word--accent {
  color: var(--color-accent-muted);
}

.hero__statements {
  max-width: 36rem;
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-height: 2.75rem;
  padding: 0 1.1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text);
  transition:
    transform 400ms var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    background-color var(--duration-base) var(--ease-out);
}

.hero__link:hover {
  transform: translateY(-2px);
  background: var(--color-bg-subtle);
}

.hero__link--primary {
  border-color: transparent;
  background: var(--color-accent);
  color: var(--color-accent-ink);
}

.hero__link--primary:hover {
  background: var(--color-accent-hover);
}

.hero__visual {
  min-width: 0;
}

@media (min-width: 960px) {
  .hero__layout {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: var(--space-16);
  }
}

@keyframes hero-drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(3rem, -2.25rem);
  }
}

@keyframes hero-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__spot::before,
  .hero__spot::after,
  .hero__live {
    animation: none;
  }
}
</style>
