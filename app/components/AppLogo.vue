<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 28 })
</script>

<template>
  <!-- Logo LD: las iniciales montadas con módulos, como un sistema de componentes. -->
  <svg
    class="app-logo"
    :width="size"
    :height="size"
    viewBox="16 16 224 224"
    aria-hidden="true"
    focusable="false"
  >
    <path class="app-logo__m app-logo__m--ink" style="--i: 0" d="M26 16H56a10 10 0 0 1 10 10V56a10 10 0 0 1 -10 10H26a10 10 0 0 1 -10 -10V26a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 1" d="M84 16H114a10 10 0 0 1 10 10V56a10 10 0 0 1 -10 10H84a10 10 0 0 1 -10 -10V26a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 2" d="M142 16H172a10 10 0 0 1 10 10V56a10 10 0 0 1 -10 10H142a10 10 0 0 1 -10 -10V26a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 3" d="M200 16H200A40 40 0 0 1 240 56V56a10 10 0 0 1 -10 10H200a10 10 0 0 1 -10 -10V26a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--ink" style="--i: 4" d="M26 74H56a10 10 0 0 1 10 10V114a10 10 0 0 1 -10 10H26a10 10 0 0 1 -10 -10V84a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 5" d="M84 74H114a10 10 0 0 1 10 10V114a10 10 0 0 1 -10 10H84a10 10 0 0 1 -10 -10V84a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 6" d="M200 74H230a10 10 0 0 1 10 10V114a10 10 0 0 1 -10 10H200a10 10 0 0 1 -10 -10V84a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--ink" style="--i: 7" d="M26 132H56a10 10 0 0 1 10 10V172a10 10 0 0 1 -10 10H26a10 10 0 0 1 -10 -10V142a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 8" d="M84 132H114a10 10 0 0 1 10 10V172a10 10 0 0 1 -10 10H84a10 10 0 0 1 -10 -10V142a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 9" d="M142 132H172a10 10 0 0 1 10 10V172a10 10 0 0 1 -10 10H142a10 10 0 0 1 -10 -10V142a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--yel" style="--i: 10" d="M200 132H230a10 10 0 0 1 10 10V142A40 40 0 0 1 200 182H200a10 10 0 0 1 -10 -10V142a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--ink" style="--i: 11" d="M26 190H56a10 10 0 0 1 10 10V230a10 10 0 0 1 -10 10H26a10 10 0 0 1 -10 -10V200a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--ink" style="--i: 12" d="M84 190H114a10 10 0 0 1 10 10V230a10 10 0 0 1 -10 10H84a10 10 0 0 1 -10 -10V200a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--ink" style="--i: 13" d="M142 190H172a10 10 0 0 1 10 10V230a10 10 0 0 1 -10 10H142a10 10 0 0 1 -10 -10V200a10 10 0 0 1 10 -10Z" />
    <path class="app-logo__m app-logo__m--cor" style="--i: 14" d="M200 190H230a10 10 0 0 1 10 10V230a10 10 0 0 1 -10 10H200a10 10 0 0 1 -10 -10V200a10 10 0 0 1 10 -10Z" />
  </svg>
</template>

<style scoped>
.app-logo {
  display: block;
  flex-shrink: 0;
}

.app-logo__m--ink {
  fill: var(--color-text);
}

.app-logo__m--yel {
  fill: #ffc933;
}

.app-logo__m--cor {
  fill: #ff6b4a;
}

/* Al cargar, los módulos aparecen uno a uno. */
.app-logo__m {
  animation: app-logo-in 420ms var(--ease-out, ease-out) both;
  animation-delay: calc(var(--i) * 35ms + 150ms);
  transform-box: fill-box;
  transform-origin: center;
}

@keyframes app-logo-in {
  from {
    opacity: 0;
    transform: scale(0.4);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-logo__m {
    animation: none;
  }
}
</style>
