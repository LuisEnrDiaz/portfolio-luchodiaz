<script setup lang="ts">
import { experiences } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
</script>

<template>
  <UiSection id="experiencia">
    <div ref="root">
      <UiContainer>
        <div class="experience u-stack u-stack--lg">
          <div data-gsap="reveal">
            <UiSectionHeading
              title="Trayectoria"
            />
          </div>

          <div>
            <div
              v-for="item in experiences"
              :key="`${item.company}-${item.period}`"
              data-gsap="reveal"
            >
              <ExperienceItem :item="item" />
            </div>
            <hr class="u-divider">
          </div>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>
