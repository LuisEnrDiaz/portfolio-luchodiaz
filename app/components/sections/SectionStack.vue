<script setup lang="ts">
import { techGroups } from '~/data/portfolio'
</script>

<template>
  <section id="stack" class="stack" aria-label="Stack">
    <UiContainer>
      <dl class="stack__list">
        <div v-for="group in techGroups" :key="group.label" class="stack__row">
          <dt class="stack__label">{{ group.label }}</dt>
          <dd class="stack__items">{{ group.items.join(', ') }}</dd>
        </div>
      </dl>
    </UiContainer>
  </section>
</template>

<style scoped>
.stack {
  padding-block: var(--space-12);
  border-block: 1px solid var(--color-border);
}

.stack__list {
  display: grid;
  gap: var(--space-6);
  margin: 0;
}

.stack__row {
  display: grid;
  gap: var(--space-2);
  max-width: 40rem;
}

.stack__label {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--color-text);
}

.stack__items {
  margin: 0;
  font-size: var(--text-lg);
  line-height: var(--leading-snug);
  color: var(--color-text-secondary);
}

@media (min-width: 900px) {
  .stack__row {
    grid-template-columns: 11rem 1fr;
    gap: var(--space-6);
    align-items: baseline;
  }
}
</style>
