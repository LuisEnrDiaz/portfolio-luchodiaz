<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{
  project: Project
  index: number
  reverse?: boolean
}>()
</script>

<template>
  <article
    class="project-card"
    :class="{ 'project-card--reverse': reverse }"
    data-gsap="project"
  >
    <div
      class="project-card__visual"
      :class="`project-card__visual--${project.tone}`"
      data-gsap="project-visual"
      aria-hidden="true"
    >
      <div class="project-card__frame">
        <span class="project-card__index">0{{ index + 1 }}</span>
        <span class="project-card__year">{{ project.year }}</span>
      </div>
    </div>

    <div class="project-card__body u-stack u-stack--md">
      <div class="u-stack u-stack--xs">
        <div class="project-card__heading">
          <h3 class="u-title-sm">{{ project.title }}</h3>
          <span class="u-meta">{{ project.year }}</span>
        </div>
        <p class="u-body u-text-pretty">{{ project.description }}</p>
      </div>

      <p class="project-card__stack">
        <span
          v-for="(tech, i) in project.stack"
          :key="tech"
        >
          {{ tech }}<template v-if="i < project.stack.length - 1">, </template>
        </span>
      </p>

      <p class="project-card__links">
        <a
          v-if="project.href"
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__link"
        >
          Código en GitHub
        </a>
        <template v-if="project.href && project.demoHref">
          <span aria-hidden="true"> | </span>
        </template>
        <a
          v-if="project.demoHref"
          :href="project.demoHref"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card__link"
        >
          Demo en vivo
        </a>
      </p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  gap: var(--space-6);
  padding-block: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.project-card__visual {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.project-card__visual--forest {
  background:
    radial-gradient(ellipse at 30% 20%, rgba(0, 112, 243, 0.35), transparent 50%),
    linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%);
}

.project-card__visual--stone {
  background:
    radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.08), transparent 45%),
    linear-gradient(160deg, #27272a 0%, #18181b 100%);
}

.project-card__visual--mist {
  background:
    radial-gradient(ellipse at 40% 60%, rgba(0, 112, 243, 0.2), transparent 55%),
    linear-gradient(180deg, #3f3f46 0%, #18181b 100%);
}

.project-card__visual--ink {
  background:
    radial-gradient(ellipse at 60% 20%, rgba(255, 255, 255, 0.06), transparent 40%),
    linear-gradient(150deg, #111111 0%, #000000 100%);
}

.project-card__frame {
  position: absolute;
  inset: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: rgba(255, 255, 255, 0.55);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.project-card__body {
  max-width: 36rem;
}

.project-card__heading {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
}

.project-card__stack {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  font-family: var(--font-mono);
  line-height: var(--leading-relaxed);
}

.project-card__links {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.project-card__link {
  color: var(--color-accent);
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-fast) var(--ease-out);
}

.project-card__link:hover {
  border-bottom-color: var(--color-accent);
}

@media (min-width: 900px) {
  .project-card {
    grid-template-columns: 1.25fr 1fr;
    align-items: center;
    gap: var(--space-10);
  }

  .project-card--reverse .project-card__visual {
    order: 2;
  }
}
</style>
