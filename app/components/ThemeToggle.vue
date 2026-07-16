<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Activar tema claro' : 'Activar tema oscuro'"
    :title="isDark ? 'Tema claro' : 'Tema oscuro'"
    @click="toggleTheme"
  >
    <Transition name="theme-icon" mode="out-in">
      <Icon
        :key="isDark ? 'sun' : 'moon'"
        :name="isDark ? 'lucide:sun' : 'lucide:moon'"
        size="18"
        aria-hidden="true"
      />
    </Transition>
  </button>
</template>

<style scoped>
.theme-toggle {
  width: 2.75rem;
  height: 2.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);
}

.theme-toggle:hover {
  background: var(--color-bg-subtle);
  color: var(--color-text);
}

.theme-icon-enter-active,
.theme-icon-leave-active {
  transition:
    opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-12deg) scale(0.8);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(12deg) scale(0.8);
}

@media (prefers-reduced-motion: reduce) {
  .theme-icon-enter-active,
  .theme-icon-leave-active {
    transition: none;
  }
}
</style>
