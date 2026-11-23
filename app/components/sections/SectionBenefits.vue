<script setup lang="ts">
import { benefits } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapReveal(root)
</script>

<template>
  <UiSection id="beneficios" class="benefits-section">
    <div ref="root">
      <UiContainer>
        <div class="benefits u-stack u-stack--xl">
          <div data-gsap="reveal">
            <UiSectionHeading
              eyebrow="Por qué contratarme"
              title="Qué gana tu equipo."
              description="Tres razones concretas. Sin fluff."
            />
          </div>

          <div class="benefits__grid">
            <article
              v-for="item in benefits"
              :key="item.id"
              data-gsap="reveal"
              class="benefits__card u-stack u-stack--md"
            >
              <span class="benefits__icon" aria-hidden="true">
                <Icon :name="item.icon" size="22" />
              </span>
              <h3 class="benefits__title">{{ item.title }}</h3>
              <p class="u-body">{{ item.body }}</p>
            </article>
          </div>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>

<style scoped>
.benefits-section {
  background:
    radial-gradient(ellipse at 50% 0%, var(--color-accent-soft), transparent 45%),
    var(--color-bg);
}

.benefits__grid {
  display: grid;
  gap: var(--space-4);
}

.benefits__card {
  padding: 1.5rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  background: var(--color-bg-elevated);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.benefits__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.benefits__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-md);
  background: var(--color-accent-soft);
  color: var(--color-accent);
}

.benefits__title {
  font-size: var(--text-lg);
  font-weight: 600;
  letter-spacing: var(--tracking-snug);
}

@media (min-width: 768px) {
  .benefits__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }
}
</style>
