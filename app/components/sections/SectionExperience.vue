<script setup lang="ts">
import { earlier, experiences, products } from '~/data/portfolio'

const job = experiences[0]!
</script>

<template>
  <section id="trayectoria" class="block">
    <UiContainer>
      <h2 class="block__title">Trayectoria</h2>

      <ol class="timeline">
        <li class="timeline__item">
          <p class="timeline__period">Ago 2022 – hoy</p>
          <div class="timeline__body">
            <h3 class="timeline__place">{{ job.company }}</h3>
            <p class="timeline__role">{{ job.role }}</p>
            <p class="timeline__text">{{ job.summary }}</p>
            <ul class="timeline__points">
              <li v-for="(point, i) in job.responsibilities" :key="i">{{ point }}</li>
            </ul>

            <div class="products">
              <div v-for="product in products" :key="product.id" class="product">
                <h4 class="product__name">{{ product.title }}</h4>
                <div>
                  <p class="product__desc">{{ product.description }}</p>
                  <p class="product__stack">{{ product.stack.join(', ') }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li v-for="entry in earlier" :key="entry.place" class="timeline__item">
          <p class="timeline__period">{{ entry.period }}</p>
          <div class="timeline__body">
            <h3 class="timeline__place">{{ entry.place }}</h3>
            <p class="timeline__role">{{ entry.role }}</p>
            <p v-if="entry.text" class="timeline__text">{{ entry.text }}</p>
            <ul v-if="entry.points" class="timeline__points">
              <li v-for="(point, i) in entry.points" :key="i">{{ point }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </UiContainer>
  </section>
</template>

<style scoped>
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline__item {
  display: grid;
  gap: var(--space-4);
  padding-block: var(--space-10);
  border-top: 1px solid var(--color-border);
}

.timeline__item:first-child {
  border-top: 0;
  padding-top: 0;
}

@media (min-width: 900px) {
  .timeline__item {
    grid-template-columns: 11rem minmax(0, 1fr);
    gap: var(--space-10);
  }
}

.timeline__period {
  margin: 0;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}

.timeline__body {
  max-width: 44rem;
}

.timeline__place {
  margin: 0;
  font-size: var(--text-2xl);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-snug);
  font-weight: 700;
}

.timeline__role {
  margin: var(--space-1) 0 0;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.timeline__text {
  margin: var(--space-4) 0 0;
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  text-wrap: pretty;
}

.timeline__points {
  margin: var(--space-5) 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: var(--space-3);
}

.timeline__points li {
  position: relative;
  padding-left: 1.25rem;
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

.timeline__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 0.45rem;
  height: 2px;
  background: var(--color-accent);
}

.products {
  margin-top: var(--space-8);
  border-top: 1px solid var(--color-border);
}

.product {
  display: grid;
  gap: var(--space-1);
  padding-block: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 700px) {
  .product {
    grid-template-columns: 8rem minmax(0, 1fr);
    gap: var(--space-6);
  }
}

.product__name {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 700;
}

.product__desc {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.product__stack {
  margin: var(--space-1) 0 0;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}
</style>
