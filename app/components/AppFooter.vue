<script setup lang="ts">
import { site } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <UiContainer>
      <div class="footer__top">
        <div class="u-stack u-stack--sm">
          <p class="font-chango footer__brand">{{ site.name }}</p>
          <p class="u-meta">{{ site.role }} · {{ site.location }}</p>
        </div>

        <nav class="u-cluster u-cluster--lg" aria-label="Social">
          <a
            v-for="social in site.socials"
            :key="social.label"
            :href="social.href"
            class="footer__social u-link"
            :target="social.href.startsWith('http') ? '_blank' : undefined"
            :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <Icon :name="social.icon" size="18" aria-hidden="true" />
            <span class="u-underline">{{ social.label }}</span>
          </a>
        </nav>
      </div>

      <hr class="u-divider footer__divider" />

      <div class="footer__bottom">
        <p class="u-meta">© {{ year }} {{ site.name }}</p>
        <p class="u-meta footer__note">Hecho con calma y atención al detalle.</p>
      </div>
    </UiContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: var(--space-16) var(--space-10);
  border-top: 1px solid var(--color-border);
}

.footer__top {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.footer__brand {
  font-size: var(--text-2xl);
}

.footer__social {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.footer__social:hover {
  color: var(--color-accent);
}

.footer__divider {
  margin-block: var(--space-8);
}

.footer__bottom {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__note {
  font-style: italic;
}

@media (min-width: 768px) {
  .footer__top,
  .footer__bottom {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
  }
}
</style>
