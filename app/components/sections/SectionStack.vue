<script setup lang="ts">
import { techGroups } from '~/data/portfolio'

const items = techGroups.flatMap((group) => group.items)
</script>

<template>
  <section id="stack" class="marquee" aria-label="Stack">
    <ul class="u-sr-only">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>

    <div class="marquee__track" aria-hidden="true">
      <template v-for="copy in 2" :key="copy">
        <span
          v-for="item in items"
          :key="`${copy}-${item}`"
          class="marquee__item"
        >
          {{ item }}
          <span class="marquee__sep" />
        </span>
      </template>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  padding-block: 1.6rem;
  border-block: 1px solid var(--color-border);
  mask-image: linear-gradient(90deg, transparent, var(--color-mask) 12%, var(--color-mask) 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, var(--color-mask) 12%, var(--color-mask) 88%, transparent);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 46s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 3rem;
  padding-right: 3rem;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--color-text-secondary);
}

.marquee__sep {
  width: 5px;
  height: 5px;
  background: var(--color-accent);
  transform: rotate(45deg);
}

@keyframes marquee-scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    mask-image: none;
    -webkit-mask-image: none;
    overflow-x: auto;
  }

  .marquee__track {
    animation: none;
  }
}
</style>
