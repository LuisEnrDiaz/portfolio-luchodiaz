<script setup lang="ts">
import { site } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
</script>

<template>
  <UiSection id="contacto">
    <div ref="root">
      <UiContainer>
        <div data-gsap="reveal" class="contact u-stack u-stack--lg">
          <a :href="`mailto:${site.email}`" class="contact__cta">
            Hablemos
          </a>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>

<style scoped>
.contact__cta {
  position: relative;
  align-self: flex-start;
  display: inline-block;
  font-size: clamp(3rem, 9vw, 7rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}

.contact__cta::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.35rem;
  height: 3px;
  background: var(--color-signal);
  transform: scaleX(0.18);
  transform-origin: left;
  transition: transform 800ms var(--ease-out);
}

.contact__cta:hover::after,
.contact__cta:focus-visible::after {
  transform: scaleX(1);
}
</style>
