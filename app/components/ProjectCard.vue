<script setup lang="ts">
import type { Project } from '~/data/portfolio'

defineProps<{
  project: Project
  index: number
  reverse?: boolean
}>()
</script>

<template>
  <article class="project-card" data-gsap="project">
    <div
      class="project-card__surface"
      :class="{ 'project-card__surface--reverse': reverse }"
    >
      <div class="project-card__visual" data-gsap="project-visual">
        <div class="project-card__zoom">
          <img
            v-if="project.image"
            class="project-card__image"
            :src="project.image"
            :alt="project.imageAlt ?? project.title"
            loading="lazy"
            decoding="async"
          >
          <RouteVisual v-else-if="project.visual === 'route'" />
          <div
            v-else
            class="project-card__placeholder"
            :class="`project-card__placeholder--${project.tone}`"
            aria-hidden="true"
          />
        </div>
      </div>

      <div class="project-card__body u-stack u-stack--md">
        <div class="u-stack u-stack--sm">
          <p class="project-card__kicker">
            {{ String(index + 1).padStart(2, '0') }} · {{ project.year }}
          </p>
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="u-body u-text-pretty project-card__text">
            {{ project.description }}
          </p>
        </div>

        <p class="project-card__stack">
          {{ project.stack.join(' · ') }}
        </p>

        <p class="project-card__links">
          <a
            v-if="project.href"
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__link"
          >
            Código en GitHub <span class="project-card__arrow" aria-hidden="true">↗</span>
          </a>
          <a
            v-if="project.demoHref"
            :href="project.demoHref"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__link"
          >
            {{ project.demoLabel ?? 'Demo en vivo' }}
            <span class="project-card__arrow" aria-hidden="true">↗</span>
          </a>
          <a
            v-if="project.downloadHref"
            :href="project.downloadHref"
            download
            class="project-card__link"
          >
            <Icon name="lucide:download" size="16" aria-hidden="true" />
            {{ project.downloadLabel ?? 'Descargar' }}
          </a>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  padding-block: var(--space-3);
}

.project-card__surface {
  display: grid;
  gap: var(--space-6);
  align-items: center;
  padding: clamp(var(--space-4), 2.4vw, var(--space-8));
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  background: var(--color-bg-elevated);
  transition:
    transform 700ms var(--ease-out),
    border-color var(--duration-slow) var(--ease-out),
    box-shadow var(--duration-slow) var(--ease-out);
}

.project-card__surface:hover {
  transform: translateY(-6px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-lg);
}

.project-card__visual {
  aspect-ratio: 16 / 10;
  min-width: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.project-card__zoom {
  width: 100%;
  height: 100%;
  transition: transform 1400ms var(--ease-out);
}

.project-card__surface:hover .project-card__zoom {
  transform: scale(1.045);
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
}

.project-card__placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, var(--color-bg-muted), var(--color-bg-subtle));
}

.project-card__body {
  min-width: 0;
  padding: var(--space-4) clamp(var(--space-2), 2.5vw, var(--space-8));
}

.project-card__kicker {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
}

.project-card__title {
  font-size: var(--text-4xl);
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.project-card__text {
  max-width: 34rem;
}

.project-card__stack {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-tertiary);
}

.project-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--space-6);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 2.75rem;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-accent-muted);
}

.project-card__arrow {
  display: inline-block;
  transition: transform 600ms var(--ease-out);
}

.project-card__link:hover .project-card__arrow {
  transform: translate(4px, -4px);
}

@media (min-width: 900px) {
  .project-card__surface {
    grid-template-columns: 1.35fr 1fr;
    gap: clamp(var(--space-8), 4vw, var(--space-16));
  }

  .project-card__surface--reverse {
    grid-template-columns: 1fr 1.35fr;
  }

  .project-card__surface--reverse .project-card__visual {
    order: 2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card__surface:hover {
    transform: none;
  }

  .project-card__surface:hover .project-card__zoom {
    transform: none;
  }
}
</style>
