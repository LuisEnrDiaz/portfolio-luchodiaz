<script setup lang="ts">
import { intro, site } from '~/data/portfolio'
</script>

<template>
  <section id="inicio" class="hero">
    <UiContainer>
      <div class="hero__content">
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
    </UiContainer>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(3rem, 9vh, 6rem);
  padding-bottom: clamp(4rem, 10vh, 7rem);
}

.hero__content {
  max-width: 46rem;
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
  max-width: 40rem;
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

</style>
