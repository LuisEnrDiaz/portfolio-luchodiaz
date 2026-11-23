<script setup lang="ts">
import type { Experience } from '~/data/portfolio'

defineProps<{
  item: Experience
}>()
</script>

<template>
  <article class="experience-item">
    <p class="experience-item__period">{{ item.period }}</p>

    <div class="experience-item__body">
      <span class="experience-item__line" aria-hidden="true" />

      <div class="experience-item__content u-stack u-stack--lg">
        <header class="u-stack u-stack--sm">
          <h3 class="experience-item__company">{{ item.company }}</h3>
          <p class="experience-item__role">{{ item.role }}</p>
          <p class="u-lead u-text-pretty experience-item__summary">
            {{ item.summary }}
          </p>
        </header>

        <div class="u-stack u-stack--sm">
          <h4 class="experience-item__label">Qué hago</h4>
          <ol class="experience-item__list">
            <li
              v-for="(line, i) in item.responsibilities"
              :key="i"
              class="experience-item__row"
            >
              <span class="experience-item__n" aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span>{{ line }}</span>
            </li>
          </ol>
        </div>

        <div
          v-if="item.products.length"
          class="u-stack u-stack--sm"
        >
          <h4 class="experience-item__label">Productos</h4>
          <ul class="experience-item__products">
            <li v-for="(line, i) in item.products" :key="i">
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.experience-item {
  display: grid;
  gap: var(--space-6);
  padding-block: var(--space-8) var(--space-10);
  border-top: 1px solid var(--color-border);
}

.experience-item__period {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.experience-item__body {
  display: flex;
  gap: var(--space-6);
  min-width: 0;
}

.experience-item__line {
  flex: 0 0 2px;
  border-radius: 2px;
  background-image: linear-gradient(
    180deg,
    var(--color-border) 0%,
    var(--color-accent) 25%,
    var(--color-border) 50%,
    var(--color-border) 100%
  );
  background-size: 100% 400%;
  animation: experience-sweep 6s linear infinite;
}

.experience-item__content {
  flex: 1;
  min-width: 0;
}

.experience-item__company {
  font-family: var(--font-sans);
  font-size: clamp(2rem, 1.4rem + 2.4vw, 3.5rem);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.experience-item__role {
  font-size: var(--text-lg);
  color: var(--color-accent-muted);
}

.experience-item__summary {
  max-width: 40rem;
  padding-top: var(--space-3);
}

.experience-item__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
}

.experience-item__list {
  max-width: 46rem;
}

.experience-item__row {
  display: flex;
  gap: var(--space-5);
  padding-block: var(--space-5);
  border-top: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  transition: color var(--duration-base) var(--ease-out);
}

.experience-item__row:hover {
  color: var(--color-text);
}

.experience-item__n {
  flex: 0 0 1.75rem;
  padding-top: 0.2rem;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

.experience-item__products {
  display: grid;
  gap: 0.5rem;
  max-width: 46rem;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

@keyframes experience-sweep {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -300%;
  }
}

@media (min-width: 900px) {
  .experience-item {
    grid-template-columns: minmax(11rem, 0.45fr) 1.55fr;
    gap: var(--space-16);
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience-item__line {
    animation: none;
  }
}
</style>
