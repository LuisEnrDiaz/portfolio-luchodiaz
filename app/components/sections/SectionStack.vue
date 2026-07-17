<script setup lang="ts">
import { techGroups } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapReveal(root)
</script>

<template>
  <UiSection id="stack">
    <div ref="root">
      <UiContainer>
        <div class="stack u-stack u-stack--xl">
          <div data-gsap="reveal">
            <UiSectionHeading
              eyebrow="Stack"
              title="Herramientas"
            />
          </div>

          <div class="stack__grid">
            <div
              v-for="group in techGroups"
              :key="group.label"
              data-gsap="reveal"
              class="stack__group u-stack u-stack--md"
            >
              <p class="u-eyebrow">{{ group.label }}</p>
              <p class="stack__items">
                {{ group.items.join(' · ') }}
              </p>
            </div>
          </div>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>

<style scoped>
.stack__grid {
  display: grid;
  gap: var(--space-8);
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-8);
}

.stack__items {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 28rem;
}

@media (min-width: 768px) {
  .stack__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-10);
  }
}
</style>
