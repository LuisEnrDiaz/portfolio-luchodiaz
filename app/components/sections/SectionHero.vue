<script setup lang="ts">
import { intro, site, ticket } from '~/data/portfolio'
</script>

<template>
  <section id="inicio" class="hero">
    <UiContainer>
      <div class="hero__grid">
        <div>
          <p class="hero__role">{{ site.role }} en Madrid</p>
          <h1 class="hero__title">{{ site.name }}</h1>
          <p class="hero__intro">
            {{ intro.before }}<strong>{{ intro.strong }}</strong>{{ intro.after }}
          </p>
          <div class="hero__actions">
            <a
              :href="site.linkedin"
              class="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >Ver LinkedIn</a>
            <a :href="`mailto:${site.email}`" class="btn">Escribir un email</a>
            <NuxtLink to="/cv" class="btn">Abrir el CV</NuxtLink>
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
    </UiContainer>
  </section>
</template>

<style scoped>
.hero {
  padding-top: clamp(3rem, 9vh, 6rem);
  padding-bottom: clamp(4rem, 10vh, 7rem);
}

.hero__grid {
  display: grid;
  gap: var(--space-16);
  align-items: center;
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: var(--space-12);
  }
}

.hero__role {
  margin: 0;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-text-secondary);
}

.hero__title {
  margin: var(--space-3) 0 0;
  font-size: clamp(3.25rem, 2rem + 6vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  font-weight: 800;
}

.hero__intro {
  margin: var(--space-8) 0 0;
  max-width: 34rem;
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  text-wrap: pretty;
}

.hero__intro strong {
  color: var(--color-text);
  font-weight: 600;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-10);
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
  width: min(100%, 22rem);
  padding: 1.6rem 1.5rem 2.4rem;
  background: var(--paper);
  color: var(--ink);
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.8125rem;
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
  grid-template-columns: 3.25rem 1fr;
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
