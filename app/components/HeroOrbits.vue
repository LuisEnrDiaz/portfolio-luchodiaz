<script setup lang="ts">
const steps = [
  { n: '01', label: 'Cliente' },
  { n: '02', label: 'Diseño' },
  { n: '03', label: 'Producción' },
]
</script>

<template>
  <div
    class="orbits"
    role="img"
    aria-label="Tres órbitas que representan el recorrido del cliente al diseño y a producción"
  >
    <span class="orbits__ring orbits__ring--1" />
    <span class="orbits__ring orbits__ring--2" />
    <span class="orbits__ring orbits__ring--3" />

    <span class="orbits__spin orbits__spin--1"><i class="orbits__node orbits__node--accent" /></span>
    <span class="orbits__spin orbits__spin--2"><i class="orbits__node orbits__node--ink" /></span>
    <span class="orbits__spin orbits__spin--3"><i class="orbits__node orbits__node--accent" /></span>

    <span class="orbits__core" />

    <p
      v-for="(step, i) in steps"
      :key="step.n"
      class="orbits__label"
      :class="`orbits__label--${i + 1}`"
      aria-hidden="true"
    >
      {{ step.n }} · {{ step.label }}
    </p>
  </div>
</template>

<style scoped>
.orbits {
  position: relative;
  width: 100%;
  max-width: 30rem;
  aspect-ratio: 1 / 1;
  margin-inline: auto;
}

.orbits__ring,
.orbits__spin {
  position: absolute;
  border-radius: 50%;
}

.orbits__ring {
  border: 1px solid var(--color-border-strong);
}

.orbits__ring--1,
.orbits__spin--1 {
  inset: 0;
}

.orbits__ring--2,
.orbits__spin--2 {
  inset: 15%;
}

.orbits__ring--3,
.orbits__spin--3 {
  inset: 30%;
}

.orbits__spin {
  animation: orbit-spin 52s linear infinite;
}

.orbits__spin--2 {
  animation-duration: 34s;
  animation-direction: reverse;
}

.orbits__spin--3 {
  animation-duration: 22s;
}

.orbits__node {
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  translate: -50% 0;
  border-radius: 50%;
}

.orbits__node--accent {
  background: var(--color-accent);
  box-shadow: 0 0 22px 5px var(--color-glow);
}

.orbits__node--ink {
  background: var(--color-text);
  box-shadow: 0 0 18px 4px var(--color-glow);
}

.orbits__core {
  position: absolute;
  inset: 42%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 30%,
    var(--color-core-highlight),
    var(--color-accent) 48%,
    var(--color-accent-soft) 100%
  );
  box-shadow: 0 0 60px 10px var(--color-glow);
  animation: orbit-pulse 4s ease-in-out infinite;
}

.orbits__label {
  position: absolute;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.orbits__label--1 {
  top: 8%;
  left: 0;
}

.orbits__label--2 {
  top: 50%;
  right: 0;
}

.orbits__label--3 {
  bottom: 6%;
  left: 4%;
}

@keyframes orbit-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit-pulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.16);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbits__spin,
  .orbits__core {
    animation: none;
  }
}
</style>
