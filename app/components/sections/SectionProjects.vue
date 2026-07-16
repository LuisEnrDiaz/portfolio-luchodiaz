<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>

<template>
  <UiSection id="proyectos">
    <UiContainer>
      <div class="projects u-stack u-stack--xl">
        <UiReveal>
          <UiSectionHeading
            eyebrow="Proyectos"
            title="Piezas seleccionadas."
            description="Trabajos presentados como una galería: imagen generosa, aire alrededor y foco en la idea."
          />
        </UiReveal>

        <div class="projects__list u-stack u-stack--xl">
          <UiReveal
            v-for="(project, index) in projects"
            :key="project.id"
            :delay="index * 60"
          >
            <ProjectCard
              :project="project"
              :index="index"
              :reverse="index % 2 === 1"
            />
          </UiReveal>
        </div>
      </div>
    </UiContainer>
  </UiSection>
</template>
