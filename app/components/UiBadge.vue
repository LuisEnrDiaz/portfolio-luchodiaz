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
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg-subtle);
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  line-height: 1.2;
}
</style>
