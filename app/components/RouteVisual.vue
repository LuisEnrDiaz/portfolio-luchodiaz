<script setup lang="ts">
// Línea 150 de EMT Madrid (datos GTFS): Arturo Soria → Sol.
// Esquema de la línea, no a escala: las paradas son reales y van en su orden.
const route
  = 'M70 390 C130 390 150 330 210 330 S310 300 350 300 S430 230 480 230 S560 170 610 170 S690 110 730 110'

const stops = [
  { name: 'Arturo Soria', x: 70, y: 390, labelX: 70, labelY: 424, anchor: 'start', terminal: true },
  { name: 'Plaza del Perú', x: 210, y: 330, labelX: 210, labelY: 306, anchor: 'middle', terminal: false },
  { name: 'Nuevos Ministerios', x: 350, y: 300, labelX: 350, labelY: 334, anchor: 'middle', terminal: false },
  { name: 'Colón', x: 480, y: 230, labelX: 480, labelY: 206, anchor: 'middle', terminal: false },
  { name: 'Cibeles', x: 610, y: 170, labelX: 610, labelY: 204, anchor: 'middle', terminal: false },
  { name: 'Sol', x: 730, y: 110, labelX: 730, labelY: 84, anchor: 'end', terminal: true },
]

const svg = ref<SVGSVGElement | null>(null)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    svg.value?.pauseAnimations()
  }
})
</script>

<template>
  <svg
    ref="svg"
    class="route-visual"
    viewBox="0 0 800 500"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-label="Línea 150 de EMT Madrid de Arturo Soria a Sol, con paradas en Plaza del Perú, Nuevos Ministerios, Colón y Cibeles"
  >
    <defs>
      <pattern id="route-dots" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" class="route-visual__dot" />
      </pattern>
    </defs>

    <rect width="800" height="500" fill="url(#route-dots)" />

    <g class="route-visual__badge">
      <rect x="44" y="40" width="52" height="30" rx="8" class="route-visual__badge-bg" />
      <text x="70" y="61" text-anchor="middle" class="route-visual__badge-text">150</text>
      <text x="108" y="61" class="route-visual__caption">EMT MADRID · ARTURO SORIA → SOL</text>
    </g>

    <path :d="route" class="route-visual__line" />
    <path :d="route" class="route-visual__dashes" />

    <circle
      v-for="stop in stops"
      :key="stop.name"
      :cx="stop.x"
      :cy="stop.y"
      :r="stop.terminal ? 9 : 7"
      class="route-visual__stop"
      :class="{ 'route-visual__stop--terminal': stop.terminal }"
    />

    <circle r="24" class="route-visual__halo">
      <animateMotion dur="12s" repeatCount="indefinite" :path="route" />
    </circle>
    <circle r="9" class="route-visual__bus">
      <animateMotion dur="12s" repeatCount="indefinite" :path="route" />
    </circle>

    <text
      v-for="stop in stops"
      :key="`${stop.name}-label`"
      :x="stop.labelX"
      :y="stop.labelY"
      :text-anchor="stop.anchor"
      class="route-visual__label"
      :class="{ 'route-visual__label--terminal': stop.terminal }"
    >{{ stop.name.toUpperCase() }}</text>
  </svg>
</template>

<style scoped>
.route-visual {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--color-bg-elevated);
}

.route-visual__dot {
  fill: var(--color-border-strong);
}

.route-visual__badge-bg {
  fill: var(--color-emt);
}

.route-visual__badge-text {
  fill: var(--color-accent-ink);
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 700;
}

.route-visual__caption {
  fill: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 1.5px;
}

.route-visual__line {
  fill: none;
  stroke: var(--color-accent);
  stroke-opacity: 0.5;
  stroke-width: 2;
}

.route-visual__dashes {
  fill: none;
  stroke: var(--color-text-tertiary);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 5 11;
  animation: route-dash 7s linear infinite;
}

.route-visual__stop {
  fill: var(--color-bg-elevated);
  stroke: var(--color-text);
  stroke-width: 2;
}

.route-visual__stop--terminal {
  fill: var(--color-text);
  stroke: var(--color-bg-elevated);
  stroke-width: 3;
  paint-order: stroke;
}

.route-visual__bus {
  fill: var(--color-accent);
}

.route-visual__halo {
  fill: var(--color-accent);
  fill-opacity: 0.18;
}

.route-visual__label {
  fill: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 1.5px;
}

.route-visual__label--terminal {
  fill: var(--color-text);
  font-weight: 500;
}

@keyframes route-dash {
  to {
    stroke-dashoffset: -160;
  }
}

@media (prefers-reduced-motion: reduce) {
  .route-visual__dashes {
    animation: none;
  }
}
</style>
