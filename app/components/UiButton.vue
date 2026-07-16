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
      <Icon v-if="icon" :name="icon" size="16" />
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
      <Icon v-if="icon" :name="icon" size="16" />
      <slot v-else name="icon" />
    </span>
  </button>
</template>

<style scoped>
.ui-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 2.75rem;
  padding: 0.7rem 1.25rem;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: var(--tracking-snug);
  line-height: 1;
  transition:
    background-color var(--duration-base) var(--ease-out),
    color var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.ui-btn:active {
  transform: translateY(1px);
}

.ui-btn--primary {
  background: var(--color-accent);
  color: var(--color-on-accent);
  border: 1px solid transparent;
}

.ui-btn--primary:hover {
  background: var(--color-accent-hover);
}

.ui-btn--ghost {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border-strong);
}

.ui-btn--ghost:hover {
  border-color: var(--color-text);
  background: var(--color-bg-elevated);
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
  transition: transform var(--duration-base) var(--ease-out);
}

.ui-btn:hover .ui-btn__icon {
  transform: translateX(2px);
}
</style>
