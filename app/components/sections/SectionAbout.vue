<script setup lang="ts">
import { interests } from '~/data/portfolio'
</script>

<template>
  <UiSection id="sobre-mi">
    <UiContainer>
      <div class="about">
        <UiReveal>
          <UiSectionHeading
            eyebrow="Sobre mí"
            title="Una forma tranquila de construir software."
            description="Me interesa el detalle invisible: el ritmo tipográfico, la arquitectura clara y las interfaces que no gritan."
          />
        </UiReveal>

        <div class="about__grid">
          <UiReveal :delay="80" class="about__copy u-stack u-stack--md">
            <p class="u-body u-text-pretty">
              Soy Frontend Developer. Trabajo con Vue 3 y TypeScript
              desarrollando interfaces de aplicaciones SaaS centradas en
              la experiencia de usuario.
            </p>
            <p class="u-body u-text-pretty">
              Fuera del editor, encuentro foco en la música, los videojuegos,
              la montaña y el diseño editorial. Esas referencias aparecen aquí
              de forma discreta: como atmósfera, no como ruido.
            </p>
            <span class="u-rule" aria-hidden="true" />
          </UiReveal>

          <UiReveal :delay="160" class="about__interests">
            <ul class="about__list u-stack u-stack--md">
              <li
                v-for="interest in interests"
                :key="interest.id"
                class="about__item"
              >
                <InterestIcon :name="interest.id" />
                <div class="u-stack u-stack--xs">
                  <p class="about__label">{{ interest.label }}</p>
                  <p class="u-meta">{{ interest.hint }}</p>
                </div>
              </li>
            </ul>
          </UiReveal>
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>

<style scoped>
.about {
  display: grid;
  gap: var(--space-12);
}

.about__grid {
  display: grid;
  gap: var(--space-10);
}

.about__copy {
  max-width: 36rem;
}

.about__list {
  padding: var(--space-8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-elevated);
}

.about__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-4);
  align-items: start;
}

.about__label {
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-snug);
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
    gap: var(--space-16);
  }
}
</style>
