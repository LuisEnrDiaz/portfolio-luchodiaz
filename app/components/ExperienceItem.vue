<script setup lang="ts">
import type { Experience } from '~/data/portfolio'

defineProps<{
  item: Experience
}>()
</script>

<template>
  <article class="experience-item">
    <div class="experience-item__meta u-stack u-stack--xs">
      <p class="u-eyebrow">{{ item.period }}</p>
      <h3 class="experience-item__role">{{ item.role }}</h3>
      <p class="u-meta">{{ item.company }}</p>
    </div>
    <p class="experience-item__desc u-body u-text-pretty">
      {{ item.description }}
    </p>
  </article>
</template>

<style scoped>
.experience-item {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.experience-item__role {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  font-weight: 400;
  letter-spacing: var(--tracking-snug);
  line-height: var(--leading-snug);
}

.experience-item__desc {
  max-width: 38rem;
}

@media (min-width: 768px) {
  .experience-item {
    grid-template-columns: minmax(14rem, 0.9fr) 1.4fr;
    gap: var(--space-10);
    align-items: start;
  }
}
</style>
