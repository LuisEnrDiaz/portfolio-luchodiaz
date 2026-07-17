<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost' | 'text'
    href?: string
    type?: 'button' | 'submit' | 'reset'
    external?: boolean
    icon?: string
  }>(),
  {
    variant: 'primary',
    type: 'button',
    external: false,
  },
)
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="ui-btn"
    :class="`ui-btn--${variant}`"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <span v-if="icon || $slots.icon" class="ui-btn__icon" aria-hidden="true">
      <Icon v-if="icon" :name="icon" size="15" />
      <slot v-else name="icon" />
    </span>
  </a>
  <button
    v-else
    :type="type"
    class="ui-btn"
    :class="`ui-btn--${variant}`"
  >
    <slot />
    <span v-if="icon || $slots.icon" class="ui-btn__icon" aria-hidden="true">
      <Icon v-if="icon" :name="icon" size="15" />
      <slot v-else name="icon" />
    </span>
  </button>
</template>

<style scoped>
.ui-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 2.25rem;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-snug);
  line-height: 1;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.ui-btn--primary {
  background: var(--color-text);
  color: var(--color-bg);
  border: 1px solid transparent;
}

.ui-btn--primary:hover {
  opacity: 0.9;
}

.ui-btn--ghost {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
}

.ui-btn--ghost:hover {
  background: var(--color-bg-subtle);
}

.ui-btn--text {
  min-height: auto;
  padding: 0;
  border-radius: 0;
  color: var(--color-accent);
}

.ui-btn--text:hover {
  color: var(--color-accent-hover);
}

.ui-btn__icon {
  display: inline-flex;
}
</style>
