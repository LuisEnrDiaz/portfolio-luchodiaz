<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="ui-badge">
    <slot>{{ label }}</slot>
  </span>
</template>

<style scoped>
.ui-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg-elevated);
  color: var(--color-text-secondary);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  transition:
    border-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.ui-badge:hover {
  border-color: var(--color-accent-muted);
  color: var(--color-accent);
  background: var(--color-accent-soft);
}
</style>
