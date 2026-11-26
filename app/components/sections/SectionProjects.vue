<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>

<template>
  <section id="proyectos" class="block">
    <UiContainer>
      <h2 class="block__title">Proyectos</h2>

      <div class="projects">
        <article v-for="project in projects" :key="project.id" class="project">
          <div class="project__media">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.imageAlt ?? ''"
              loading="lazy"
            >
            <RouteVisual v-else-if="project.visual === 'route'" />
          </div>

          <div>
            <p class="project__kind">{{ project.year }}</p>
            <h3 class="project__title">{{ project.title }}</h3>
            <p class="project__desc">{{ project.description }}</p>
            <p class="project__stack">{{ project.stack.join(', ') }}</p>
            <div class="project__links">
              <a
                v-if="project.demoHref"
                :href="project.demoHref"
                class="btn"
                :class="{ 'btn--primary': project.visual === 'route' }"
                target="_blank"
                rel="noopener noreferrer"
              >{{ project.demoLabel ?? 'Ver proyecto' }}</a>
              <a
                v-if="project.downloadHref"
                :href="project.downloadHref"
                class="btn"
                download
              >{{ project.downloadLabel ?? 'Descargar' }}</a>
            </div>
          </div>
        </article>
      </div>
    </UiContainer>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  gap: var(--space-16);
}

.project {
  display: grid;
  gap: var(--space-8);
  align-items: center;
}

@media (min-width: 900px) {
  .project {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: var(--space-12);
  }

  .project:nth-child(even) .project__media {
    order: 2;
  }
}

.project__media {
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
  aspect-ratio: 16 / 10;
}

.project__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.project__media :deep(svg) {
  width: 100%;
  height: 100%;
}

.project__kind {
  margin: 0;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
}

.project__title {
  margin: var(--space-2) 0 0;
  font-size: var(--text-3xl);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  font-weight: 700;
}

.project__desc {
  margin: var(--space-4) 0 0;
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  text-wrap: pretty;
}

.project__stack {
  margin: var(--space-4) 0 0;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.project__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}
</style>
