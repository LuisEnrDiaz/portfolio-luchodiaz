<script setup lang="ts">
import SectionsHero from '~/components/sections/SectionHero.vue'
import SectionsAbout from '~/components/sections/SectionAbout.vue'
import SectionsStack from '~/components/sections/SectionStack.vue'
import SectionsExperience from '~/components/sections/SectionExperience.vue'
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <SectionsHero />
      <SectionsAbout />
      <SectionsStack />
      <SectionsExperience />
    </main>
    <AppFooter />
  </div>
</template>
