<script setup lang="ts">
import { techGroups } from '~/data/portfolio'
</script>

<template>
  <UiSection id="stack">
    <UiContainer>
      <div class="stack u-stack u-stack--xl">
        <UiReveal>
          <UiSectionHeading
            eyebrow="Stack tecnológico"
            title="Herramientas con criterio."
            description="Prefiero un stack estable, legible y mantenible. Tecnología al servicio del producto, no al revés."
          />
        </UiReveal>

        <div class="stack__grid u-grid u-grid--3">
          <UiReveal
            v-for="(group, index) in techGroups"
            :key="group.label"
            :delay="index * 80"
            class="stack__group u-stack u-stack--md"
          >
            <p class="u-eyebrow">{{ group.label }}</p>
            <ul class="stack__items u-stack u-stack--sm">
              <li
                v-for="item in group.items"
                :key="item"
                class="stack__item"
              >
                {{ item }}
              </li>
            </ul>
          </UiReveal>
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>

<style scoped>
.stack__group {
  padding: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.stack__item {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  padding-block: var(--space-2);
  border-bottom: 1px solid var(--color-border);
  transition: color var(--duration-fast) var(--ease-out), padding-left var(--duration-base) var(--ease-out);
}

.stack__item:last-child {
  border-bottom: 0;
}

.stack__item:hover {
  color: var(--color-accent);
  padding-left: var(--space-2);
}

@media (min-width: 768px) {
  .stack__group {
    border-top: 0;
    border-left: 1px solid var(--color-border);
    padding-inline: var(--space-8);
  }

  .stack__group:first-child {
    border-left: 0;
    padding-left: 0;
  }
}
</style>
