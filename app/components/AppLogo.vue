<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 28 })
</script>

<template>
  <svg
    class="app-logo"
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="64" height="64" rx="15" fill="#ffc933" />
    <g
      fill="none"
      stroke="#121317"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M15 18V46H27" />
      <path d="M34 18V46H37C46 46 50 40 50 32C50 24 46 18 37 18Z" />
    </g>
  </svg>
</template>

<style scoped>
.app-logo {
  display: block;
  flex-shrink: 0;
}
</style>
