<script setup lang="ts">
import { site } from '~/data/portfolio'
</script>

<template>
  <section id="contacto" class="block">
    <UiContainer>
      <h2 class="contact__title">¿Hablamos?</h2>
      <p class="contact__text">Si tienes un proyecto o una oferta de frontend, escríbeme.</p>
      <a :href="`mailto:${site.email}`" class="contact__mail">{{ site.email }}</a>
      <div class="contact__other">
        <a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="link">{{ site.phone }}</a>
        <a :href="site.linkedin" class="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <NuxtLink to="/cv" class="link">Abrir el CV</NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.contact__title {
  margin: 0;
  font-size: clamp(2.75rem, 1.8rem + 4vw, 5rem);
  line-height: 1;
  letter-spacing: -0.045em;
  font-weight: 800;
}

.contact__text {
  margin: var(--space-5) 0 0;
  max-width: 34rem;
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

.contact__mail {
  display: inline-block;
  margin-top: var(--space-8);
  padding-bottom: 0.15rem;
  border-bottom: 3px solid var(--color-accent);
  font-size: clamp(1.25rem, 0.9rem + 1.6vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  overflow-wrap: anywhere;
}

.contact__mail:hover {
  color: var(--color-accent);
}

.contact__mail:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

.contact__other {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  margin-top: var(--space-6);
  color: var(--color-text-secondary);
}
</style>
