<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    class="section-heading u-stack u-stack--md"
    :class="{ 'section-heading--center': align === 'center' }"
  >
    <p v-if="eyebrow" class="u-eyebrow">{{ eyebrow }}</p>
    <h2 class="u-title u-text-balance">{{ title }}</h2>
    <p v-if="description" class="section-heading__desc u-lead u-text-pretty">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.section-heading--center {
  text-align: center;
  align-items: center;
}

.section-heading__desc {
  max-width: 36rem;
}
</style>
