<script setup lang="ts">
withDefaults(
  defineProps<{
    narrow?: boolean
    as?: string
  }>(),
  {
    narrow: false,
    as: 'div',
  },
)
</script>

<template>
  <component
    :is="as"
    class="u-container"
    :class="{ 'u-container--narrow': narrow }"
  >
    <slot />
  </component>
</template>
