<template>
  <div class="app-shell">
    <a href="#contenido" class="skip-link">Saltar al contenido</a>
    <LaptopScene v-if="$route.path === '/'" />
    <NuxtPage />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}
</style>
