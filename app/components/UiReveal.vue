<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number
  }>(),
  {
    delay: 0,
  },
)

const { el, isVisible } = useReveal()
</script>

<template>
  <div
    ref="el"
    class="u-reveal"
    :class="{ 'is-visible': isVisible }"
    :style="{ '--reveal-delay': `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>
