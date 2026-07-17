<script setup lang="ts">
import { site } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapReveal(root)
</script>

<template>
  <UiSection id="sobre-mi">
    <div ref="root">
      <UiContainer narrow>
        <div data-gsap="reveal" class="about u-stack u-stack--lg">
          <UiSectionHeading
            eyebrow="Sobre mí"
            title="Frontend Engineer"
          />
          <div class="about__copy u-stack u-stack--md">
            <p
              v-for="(paragraph, i) in site.about"
              :key="i"
              class="u-lead u-text-pretty"
            >
              {{ paragraph }}
            </p>
          </div>
          <p class="u-meta">{{ site.fullName }} · {{ site.location }}</p>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>

<style scoped>
.about {
  max-width: 42rem;
}

.about__copy {
  max-width: 42rem;
}
</style>
