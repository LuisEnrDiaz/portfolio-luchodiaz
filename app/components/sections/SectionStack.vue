<script setup lang="ts">
import { stackExtra, techGroups } from '~/data/portfolio'
</script>

<template>
  <section id="stack" class="block">
    <UiContainer>
      <h2 class="block__title">Stack</h2>

      <dl class="stack">
        <div v-for="group in techGroups" :key="group.label" class="stack__row">
          <dt class="stack__label">{{ group.label }}</dt>
          <dd class="stack__items">{{ group.items.join(', ') }}</dd>
        </div>
      </dl>

      <p class="stack__extra">{{ stackExtra }}</p>
    </UiContainer>
  </section>
</template>

<style scoped>
.stack {
  margin: 0;
}

.stack__row {
  display: grid;
  gap: var(--space-2);
  padding-block: var(--space-5);
  border-top: 1px solid var(--color-border);
}

.stack__row:last-child {
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 900px) {
  .stack__row {
    grid-template-columns: 11rem minmax(0, 1fr);
    gap: var(--space-10);
  }
}

.stack__label {
  font-weight: 600;
}

.stack__items {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.stack__extra {
  margin: var(--space-8) 0 0;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}
</style>
