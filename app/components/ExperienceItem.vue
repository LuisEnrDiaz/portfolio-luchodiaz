<script setup lang="ts">
import type { Experience } from '~/data/portfolio'

defineProps<{
  item: Experience
}>()
</script>

<template>
  <article class="experience-item u-stack u-stack--lg">
    <header class="experience-item__header">
      <div class="u-stack u-stack--xs">
        <p class="u-meta">{{ item.period }}</p>
        <h3 class="experience-item__role">{{ item.role }}</h3>
        <p class="experience-item__company">{{ item.company }}</p>
      </div>
      <p class="u-body u-text-pretty experience-item__summary">
        {{ item.summary }}
      </p>
    </header>

    <div class="experience-item__block u-stack u-stack--sm">
      <h4 class="experience-item__label">Responsabilidades</h4>
      <ul class="experience-item__list">
        <li
          v-for="(line, i) in item.responsibilities"
          :key="i"
        >
          {{ line }}
        </li>
      </ul>
    </div>

    <div class="experience-item__block u-stack u-stack--sm">
      <h4 class="experience-item__label">Productos desarrollados</h4>
      <ul class="experience-item__list">
        <li
          v-for="(product, i) in item.products"
          :key="i"
        >
          {{ product }}
        </li>
      </ul>
    </div>

    <div class="experience-item__block u-stack u-stack--sm">
      <h4 class="experience-item__label">Stack</h4>
      <p class="experience-item__stack">
        {{ item.stack.join(' · ') }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.experience-item {
  padding-block: var(--space-10);
  border-top: 1px solid var(--color-border);
}

.experience-item__header {
  display: grid;
  gap: var(--space-5);
}

.experience-item__role {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
}

.experience-item__company {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent-muted);
}

.experience-item__summary {
  max-width: 42rem;
}

.experience-item__label {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-tertiary);
}

.experience-item__list {
  display: grid;
  gap: 0.55rem;
  max-width: 44rem;
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.experience-item__list li {
  position: relative;
  padding-left: 1rem;
}

.experience-item__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: var(--color-accent);
}

.experience-item__stack {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  font-family: var(--font-mono);
  line-height: var(--leading-relaxed);
  max-width: 44rem;
}

@media (min-width: 900px) {
  .experience-item__header {
    grid-template-columns: minmax(14rem, 0.75fr) 1.5fr;
    gap: var(--space-10);
    align-items: start;
  }
}
</style>
