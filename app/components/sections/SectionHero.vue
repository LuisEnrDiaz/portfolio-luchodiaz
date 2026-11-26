<script setup lang="ts">
import { highlights, intro, site } from '~/data/portfolio'
</script>

<template>
  <section id="inicio" class="hero">
    <UiContainer>
      <div class="hero__grid">
        <div>
          <p class="hero__role">{{ site.role }} en Madrid</p>
          <h1 class="hero__title">{{ site.name }}</h1>
          <p class="hero__intro">
            {{ intro.before }}<strong>{{ intro.strong }}</strong>{{ intro.after }}
          </p>
          <div class="hero__actions">
            <a
              :href="site.linkedin"
              class="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >Ver LinkedIn</a>
            <a :href="`mailto:${site.email}`" class="btn">Escribir un email</a>
            <NuxtLink to="/cv" class="btn">Abrir el CV</NuxtLink>
          </div>
        </div>

        <ul class="hero__list" aria-label="Lo que hago">
          <li v-for="item in highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(3rem, 9vh, 6rem);
  padding-bottom: clamp(4rem, 10vh, 7rem);
}

.hero__grid {
  display: grid;
  gap: var(--space-16);
  align-items: center;
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: var(--space-12);
  }
}

.hero__role {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text-secondary);
}

.hero__title {
  margin: var(--space-3) 0 0;
  font-size: clamp(3.25rem, 2rem + 6vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  font-weight: 800;
}

.hero__intro {
  margin: var(--space-8) 0 0;
  max-width: 34rem;
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  text-wrap: pretty;
}

.hero__intro strong {
  color: var(--color-text);
  font-weight: 600;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-10);
}

.hero__list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--color-border);
}

.hero__list li {
  position: relative;
  padding: var(--space-4) 0 var(--space-4) 1.5rem;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--text-lg);
  line-height: var(--leading-snug);
  color: var(--color-text);
}

.hero__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 2px;
  background: var(--color-signal);
  transform: translateY(-50%);
}
</style>
