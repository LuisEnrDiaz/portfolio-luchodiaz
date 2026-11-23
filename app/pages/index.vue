<script setup lang="ts">
import SectionsHero from '~/components/sections/SectionHero.vue'
import SectionsAbout from '~/components/sections/SectionAbout.vue'
import SectionsStack from '~/components/sections/SectionStack.vue'
import SectionsExperience from '~/components/sections/SectionExperience.vue'
import SectionsProjects from '~/components/sections/SectionProjects.vue'
import SectionsContact from '~/components/sections/SectionContact.vue'
</script>

<template>
  <div class="home">
    <AppHeader />
    <main id="contenido">
      <SectionsHero />
      <SectionsStack />
      <SectionsAbout />
      <SectionsExperience />
      <SectionsProjects />
      <SectionsContact />
    </main>
    <AppFooter />
  </div>
</template>
