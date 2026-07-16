<script setup lang="ts">
import { experiences } from '~/data/portfolio'
</script>

<template>
  <UiSection id="experiencia">
    <UiContainer>
      <div class="experience u-stack u-stack--xl">
        <UiReveal>
          <UiSectionHeading
            eyebrow="Experiencia"
            title="Trayectoria con foco."
            description="Roles donde el código, el diseño y el producto se encuentran."
          />
        </UiReveal>

        <div class="experience__list">
          <UiReveal
            v-for="(item, index) in experiences"
            :key="`${item.company}-${item.period}`"
            :delay="index * 70"
          >
            <ExperienceItem :item="item" />
          </UiReveal>
          <hr class="u-divider" />
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>
