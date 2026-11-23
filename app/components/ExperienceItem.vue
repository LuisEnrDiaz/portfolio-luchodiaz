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
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.experience-item__body {
  display: flex;
  gap: var(--space-6);
  min-width: 0;
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
  font-size: var(--text-sm);
  font-weight: 700;
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
}

.experience-item__products {
  display: grid;
  gap: 0.5rem;
  max-width: 46rem;
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

@media (min-width: 900px) {
  .experience-item {
    gap: var(--space-8);
  }
}

</style>
