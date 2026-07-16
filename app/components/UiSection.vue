<script setup lang="ts">
withDefaults(
  defineProps<{
    id?: string
    tight?: boolean
    as?: string
  }>(),
  {
    tight: false,
    as: 'section',
  },
)
</script>

<template>
  <component
    :is="as"
    :id="id"
    class="u-section"
    :class="{ 'u-section--tight': tight }"
  >
    <slot />
  </component>
</template>
