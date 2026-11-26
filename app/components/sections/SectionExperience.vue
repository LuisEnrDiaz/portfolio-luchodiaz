<script setup lang="ts">
import { earlier, experiences, products, ticket } from '~/data/portfolio'

const job = experiences[0]!
</script>

<template>
  <section id="trayectoria" class="block">
    <UiContainer>
      <h2 class="block__title">Trayectoria</h2>

      <ol class="timeline">
        <li class="timeline__item">
          <p class="timeline__period">Ago 2022 – hoy</p>
          <div class="timeline__body timeline__body--job">
            <div class="timeline__main">
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

            <div class="ticket-wrap">
              <article class="ticket" aria-label="WeWelcom en cifras">
              <div class="ticket__head">
                <p class="ticket__brand">{{ ticket.brand }}</p>
                <p class="ticket__sub">{{ ticket.subtitle }}</p>
              </div>
              <hr class="ticket__rule">
              <div class="ticket__meta">
                <p>{{ ticket.who }}</p>
                <p>{{ ticket.since }}</p>
              </div>
              <hr class="ticket__rule">
              <ul class="ticket__lines">
                <li v-for="line in ticket.lines" :key="line.label" class="ticket__line">
                  <span class="ticket__qty">{{ line.qty }}</span>
                  <span>{{ line.label }}</span>
                </li>
              </ul>
              <hr class="ticket__rule">
              <p>{{ ticket.note.label }}</p>
              <p class="ticket__note">
                <span>{{ ticket.note.from }}</span>
                <span class="ticket__dots" aria-hidden="true" />
                <span class="ticket__to">{{ ticket.note.to }}</span>
              </p>
              <hr class="ticket__rule">
              <p class="ticket__total">
                <span>Stack</span>
                <span>{{ ticket.stack }}</span>
              </p>
              <p class="ticket__foot">{{ ticket.footer }}</p>
            </article>
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

@media (min-width: 1100px) {
  .timeline__body--job {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 17rem;
    gap: var(--space-10);
    max-width: none;
    align-items: start;
  }

  .timeline__body--job .ticket-wrap {
    position: sticky;
    top: 6rem;
  }
}

.timeline__body--job .ticket-wrap {
  margin-top: var(--space-10);
}

@media (min-width: 1100px) {
  .timeline__body--job .ticket-wrap {
    margin-top: var(--space-2);
  }
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
/* La comanda: papel térmico, siempre claro aunque el tema sea oscuro. */
.ticket-wrap {
  display: flex;
  justify-content: center;
}

.ticket {
  --paper: #fbfbf8;
  --ink: #1d1e22;
  --ink-soft: #5d6069;
  position: relative;
  width: min(100%, 17rem);
  padding: 1.4rem 1.25rem 2.2rem;
  background: var(--paper);
  color: var(--ink);
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.75rem;
  line-height: 1.55;
  transform: rotate(-2.5deg);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.45);
  -webkit-mask:
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) bottom / 14px 7px repeat-x,
    linear-gradient(#000 0 0) top / 100% calc(100% - 7px) no-repeat;
  mask:
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) bottom / 14px 7px repeat-x,
    linear-gradient(#000 0 0) top / 100% calc(100% - 7px) no-repeat;
  animation: ticket-print 1.1s var(--ease-out) 0.2s both;
}

@keyframes ticket-print {
  from {
    clip-path: inset(0 0 100% 0);
    transform: rotate(-2.5deg) translateY(-1.5rem);
  }

  to {
    clip-path: inset(0 0 0 0);
    transform: rotate(-2.5deg) translateY(0);
  }
}

.ticket p {
  margin: 0;
}

.ticket__head {
  text-align: center;
}

.ticket__brand {
  font-size: 1rem;
  font-weight: 700;
}

.ticket__sub,
.ticket__meta {
  color: var(--ink-soft);
}

.ticket__rule {
  margin: 0.9rem 0;
  border: 0;
  border-top: 1px dashed rgba(29, 30, 34, 0.35);
}

.ticket__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.ticket__lines {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.15rem;
}

.ticket__line {
  display: grid;
  grid-template-columns: 2.75rem 1fr;
  gap: 0.5rem;
}

.ticket__qty {
  font-weight: 700;
  text-align: right;
}

.ticket__note {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.ticket__dots {
  flex: 1;
  border-bottom: 1px dotted rgba(29, 30, 34, 0.4);
}

.ticket__to {
  font-weight: 700;
}

.ticket__total {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
}

.ticket__foot {
  margin-top: 1rem !important;
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.04em;
}
</style>
