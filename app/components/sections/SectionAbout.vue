<script setup lang="ts">
import { education, languages, site, stats } from "~/data/portfolio";

const root = ref<HTMLElement | null>(null);
useGsapReveal(root);
useGsapCounters(root);

const [lead, ...rest] = site.about;
const closing = rest.pop();
</script>

<template>
  <UiSection id="sobre-mi">
    <div ref="root">
      <UiContainer>
        <div class="about u-stack u-stack--xl">
          <div data-gsap="reveal" class="about__top">
            <UiSectionHeading
              eyebrow="Sobre mí"
              title="Del trato con el cliente a una aplicación en producción."
            />
            <div class="about__copy u-stack u-stack--md">
              <p class="u-lead u-text-pretty">{{ lead }}</p>
              <p
                v-for="(paragraph, i) in rest"
                :key="i"
                class="u-lead u-text-pretty"
              >
                {{ paragraph }}
              </p>
              <p v-if="closing" class="u-lead u-text-pretty about__closing">
                {{ closing }}
              </p>
              <div class="about__meta u-stack u-stack--xs">
                <p class="u-meta">{{ site.fullName }} · {{ site.location }}</p>
                <p class="u-meta">{{ education.school }} — {{ education.title }}</p>
                <p class="u-meta">{{ languages }}</p>
              </div>
            </div>
          </div>

          <ul data-gsap="reveal" class="about__stats" aria-label="Cifras">
            <li v-for="stat in stats" :key="stat.label" class="about__stat">
              <p class="about__value">
                <span v-if="stat.prefix">{{ stat.prefix }}</span><span :data-count="stat.value">{{ stat.value }}</span><span v-if="stat.suffix">{{ stat.suffix }}</span>
              </p>
              <p class="about__label">{{ stat.label }}</p>
            </li>
          </ul>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>

<style scoped>
.about__top {
  display: grid;
  gap: var(--space-10);
}

.about__copy {
  max-width: 36rem;
}

.about__closing {
  color: var(--color-text);
}

.about__meta {
  padding-top: var(--space-4);
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
}

.about__stat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-6);
  min-height: 11rem;
  padding: var(--space-8) var(--space-6);
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  transition: background-color var(--duration-slow) var(--ease-out);
}

.about__stat:hover {
  background: var(--color-bg-subtle);
}

.about__value {
  font-size: clamp(2.5rem, 3.6vw, 3.5rem);
  white-space: nowrap;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.05em;
  font-variant-numeric: tabular-nums;
}

.about__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: 1.5;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

@media (min-width: 900px) {
  .about__top {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-16);
    align-items: start;
  }
}
</style>
