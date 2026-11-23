<script setup lang="ts">
import { projects } from '~/data/portfolio'

const root = ref<HTMLElement | null>(null)
useGsapProjectCards(root)
</script>

<template>
  <UiSection id="proyectos">
    <div ref="root">
      <UiContainer>
        <div class="projects u-stack u-stack--xl">
          <div data-gsap="project">
            <UiSectionHeading
              eyebrow="Trabajo"
              title="Producto en producción y un proyecto propio"
            />
          </div>

          <div class="projects__list">
            <ProjectCard
              v-for="(project, index) in projects"
              :key="project.id"
              :project="project"
              :index="index"
              :reverse="index % 2 === 1"
            />
          </div>
        </div>
      </UiContainer>
    </div>
  </UiSection>
</template>

<style scoped>
.projects__list {
  display: grid;
}
</style>
