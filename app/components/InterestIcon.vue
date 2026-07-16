<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
  }>(),
  {},
)

const iconMap: Record<string, string> = {
  music: 'lucide:music-2',
  games: 'lucide:gamepad-2',
  mountain: 'lucide:mountain',
  design: 'lucide:pen-tool',
}
</script>

<template>
  <span class="interest-icon" :aria-label="props.name">
    <Icon
      :name="iconMap[props.name] ?? 'lucide:sparkles'"
      size="22"
      aria-hidden="true"
    />
  </span>
</template>

<style scoped>
.interest-icon {
  display: inline-flex;
  color: var(--color-accent-muted);
}
</style>
