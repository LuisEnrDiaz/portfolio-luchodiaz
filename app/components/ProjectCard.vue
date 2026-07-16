<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{
  project: Project
  index: number
  reverse?: boolean
}>()
</script>

<template>
  <article class="project-card" :class="{ 'project-card--reverse': reverse }">
    <div
      class="project-card__visual"
      :class="`project-card__visual--${project.tone}`"
      aria-hidden="true"
    >
      <div class="project-card__frame">
        <span class="project-card__mark" />
        <span class="project-card__caption u-serif">{{ project.subtitle }}</span>
      </div>
    </div>

    <div class="project-card__body u-stack u-stack--md">
      <div class="u-flex-between">
        <p class="u-meta">{{ project.year }}</p>
        <p class="u-meta">0{{ index + 1 }}</p>
      </div>

      <div class="u-stack u-stack--sm">
        <h3 class="u-title-sm">{{ project.title }}</h3>
        <p class="u-body u-text-pretty">{{ project.description }}</p>
      </div>

      <div class="u-cluster u-cluster--sm">
        <UiBadge
          v-for="tag in project.tags"
          :key="tag"
          :label="tag"
        />
      </div>

      <a
        v-if="project.href"
        :href="project.href"
        class="u-link u-link--accent u-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver proyecto
        <Icon name="lucide:arrow-up-right" size="16" aria-hidden="true" />
      </a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  gap: var(--space-6);
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
    radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.35), transparent 50%),
    linear-gradient(145deg, #4a6b58 0%, #2f4539 48%, #1f2f27 100%);
}

.project-card__visual--stone {
  background:
    radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.28), transparent 45%),
    linear-gradient(160deg, #a8a299 0%, #7d786e 45%, #4f4b44 100%);
}

.project-card__visual--mist {
  background:
    radial-gradient(ellipse at 40% 60%, rgba(255, 255, 255, 0.4), transparent 55%),
    linear-gradient(180deg, #d8d4cb 0%, #b7b2a7 50%, #8f8a80 100%);
}

.project-card__visual--ink {
  background:
    radial-gradient(ellipse at 60% 20%, rgba(255, 255, 255, 0.12), transparent 40%),
    linear-gradient(150deg, #2a2a2a 0%, #1c1c1c 55%, #111 100%);
}

.project-card__frame {
  position: absolute;
  inset: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(248, 247, 244, 0.22);
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.project-card__mark {
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid rgba(248, 247, 244, 0.55);
  border-radius: 50%;
}

.project-card__caption {
  color: rgba(248, 247, 244, 0.88);
  font-size: var(--text-xl);
  font-style: italic;
  letter-spacing: var(--tracking-snug);
}

.project-card__body {
  max-width: 36rem;
}

@media (min-width: 900px) {
  .project-card {
    grid-template-columns: 1.35fr 1fr;
    align-items: center;
    gap: var(--space-10);
  }

  .project-card--reverse .project-card__visual {
    order: 2;
  }
}
</style>
