<script setup lang="ts">
import { site } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapReveal(root)
</script>

<template>
  <UiSection id="contacto">
    <div ref="root">
      <UiContainer>
        <div data-gsap="reveal" class="contact u-stack u-stack--lg">
          <p class="u-eyebrow">Contacto</p>
          <a :href="`mailto:${site.email}`" class="contact__cta">
            Hablemos
            <span class="contact__arrow" aria-hidden="true">↗</span>
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
  font-weight: 600;
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
  background: var(--color-accent);
  transform: scaleX(0.18);
  transform-origin: left;
  transition: transform 800ms var(--ease-out);
}

.contact__cta:hover::after,
.contact__cta:focus-visible::after {
  transform: scaleX(1);
}

.contact__arrow {
  display: inline-block;
  color: var(--color-accent-muted);
  transition: transform 600ms var(--ease-out);
}

.contact__cta:hover .contact__arrow {
  transform: translate(0.08em, -0.08em);
}
</style>
